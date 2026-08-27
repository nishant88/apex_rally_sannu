import { watch } from 'fs';
import { exec } from 'child_process';

console.log('=== Apex Rally Auto-Git Sync Watcher ===');
console.log('Monitoring workspace files for changes...');

let debounceTimeout = null;
const changedFiles = new Set();

const executeSync = () => {
    const filesArray = Array.from(changedFiles);
    changedFiles.clear();

    const fileListString = filesArray.length > 5 
        ? `${filesArray.slice(0, 5).join(', ')} and ${filesArray.length - 5} more`
        : filesArray.join(', ');

    const commitMessage = `Auto-commit: changes in ${fileListString || 'workspace'}`;

    exec('git status --porcelain', (statusErr, statusStdout) => {
        if (statusErr) {
            console.error('Git status check failed:', statusErr.message);
            return;
        }

        if (!statusStdout.trim()) {
            // No actual changes to commit
            return;
        }

        console.log(`\n[${new Date().toLocaleTimeString()}] Changes detected. Running Git Sync...`);
        
        exec('git add .', (addErr) => {
            if (addErr) {
                console.error('Git add failed:', addErr.message);
                return;
            }

            exec(`git commit -m "${commitMessage}"`, (commitErr, commitStdout) => {
                if (commitErr) {
                    console.error('Git commit failed:', commitErr.message);
                    return;
                }
                console.log(commitStdout.trim());

                exec('git push', (pushErr, pushStdout, pushStderr) => {
                    if (pushErr) {
                        console.error('Git push failed:', pushErr.message);
                        return;
                    }
                    console.log('✓ Successfully pushed changes to GitHub remote!');
                });
            });
        });
    });
};

const ignoreList = [
    '.git',
    'node_modules',
    'dist',
    'git-watch.js'
];

watch('./', { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Check if filename matches any ignored path
    const isIgnored = ignoreList.some(pattern => filename.includes(pattern));
    if (isIgnored) return;

    changedFiles.add(filename);

    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }

    // Debounce for 3 seconds to group multiple saves/actions
    debounceTimeout = setTimeout(executeSync, 3000);
});
