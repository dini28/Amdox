# Amdox | Executive Talent Protocol

![Amdox Banner](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)

> **"Architecting the future of professional ascension."**

Amdox is a premium, high-frequency talent acquisition platform designed for the modern executive economy. It bridges the gap between elite talent and forward-thinking organizations through a unified, trust-oriented interface.

## System Architecture

Built on a modern, high-performance stack:

-   **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [clsx](https://github.com/lukeed/clsx)
-   **Motion**: [Framer Motion](https://www.framer.com/motion/) for fluid transitions.
-   **Icons**: [Lucide React](https://lucide.dev/) for crisp visual language.
-   **Routing**: [React Router v7](https://reactrouter.com/)

## Features

### 1. Dual-Protocol Interface
The platform adapts contextually based on the user's role:

-   **Seeker Protocol (Hub)**:
    -   **Repository Scan**: Advanced search with interactive filtering (Salary, Employment Type).
    -   **Tracking**: Real-time status updates on applications ("Under Verification", "Active Match").
    -   **Profile Optimization**: Dedicated section for managing skills and experience.
    
-   **Employer Protocol (Acquisition)**:
    -   **Talent Intelligence**: Dashboard for tracking active roles and talent pools.
    -   **Live Audit**: Real-time metrics on candidate flow and pipeline health.
    -   **Management Interface**: High-density data grids for managing open positions.

### 2. Executive Design Language
-   **Aesthetic**: "Executive Luxury" — A minimalist palette of Slate, White, and Semantic Green.
-   **Typography**: Massive, bold headers paired with precision monospaced data tags.
-   **Interaction**: Glassmorphism, subtle parallaxes, and meaningful micro-interactions.

## Getting Started

### Prerequisites
-   Node.js (v18+)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/amdox.git
    cd amdox
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Initialize Development Protocol**
    ```bash
    npm run dev
    ```

4.  **Access System**
    -   Local: `http://localhost:5173`
    -   Network: `http://<your-ip>:5173`

## Project Structure

```
src/
├── components/         # Atomic design elements
│   ├── Home/          # Landing page specialized components
│   ├── About/         # Corporate identity components
│   ├── JobCard.jsx    # Universal job display unit
│   ├── Sidebar.jsx    # Context-aware navigation
│   └── ...
├── pages/             # Core route views
│   ├── JobSeekerDashboard.jsx
│   ├── EmployerDashboard.jsx
│   ├── Profile.jsx
│   ├── CompanyProfile.jsx
│   └── ...
├── context/           # Global state management
│   └── JobContext.jsx
└── utils/             # Helper functions (cn, formatters)
```

## License

Private Proprietary Protocol. All rights reserved.
