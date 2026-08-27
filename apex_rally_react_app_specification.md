# Apex Rally React Application Structure

This document outlines the React application structure for the Apex Rally driver sponsorship platform.

## 1. Project Setup
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS (configured with Apex Narrative design system tokens)
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 2. Component Architecture

### Core Components
- `TopNavBar`: Global navigation with active state handling.
- `Footer`: Global footer with social links and legals.
- `Button`: Versatile button component supporting 'primary', 'secondary', and 'outline' variants.
- `StatCard`: Standardized card for displaying performance metrics.
- `SectionHeader`: Consistent technical-styled headers for page sections.

### Page Components (Screens)
- `Home`: The cinematic landing page ({{DATA:SCREEN:SCREEN_6}}).
- `DriverProfile`: The editorial athlete bio ({{DATA:SCREEN:SCREEN_5}}).
- `Sponsorship`: The commercial partnership hub ({{DATA:SCREEN:SCREEN_4}}).
- `Results`: The data-driven performance dashboard ({{DATA:SCREEN:SCREEN_2}}).

## 3. Implementation Plan
1. **Design Tokens:** Map `{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}` to `tailwind.config.js`.
2. **Layout Wrapper:** Create a `Layout` component containing the `TopNavBar` and `Footer`.
3. **Routing:** Define routes for `/`, `/driver`, `/sponsorship`, and `/results`.
4. **Data Management:** Use a central constants file for driver stats and rally results to ensure consistency across the app.

## 4. Next Steps
- Implement the `tailwind.config.js` with the specific hex codes and font (Space Grotesk).
- Create the individual page components based on the existing HTML screens.
- Link all CTAs ("BECOME A PARTNER", "VIEW DRIVER PROFILE") to their respective routes.