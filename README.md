# Finance Dashboard

## Overview

A modern finance dashboard built to help users track transactions, analyze spending patterns, and gain insights into their financial behavior.

This project focuses on clean UI, intuitive UX, and efficient state management.

---

## Features

### Dashboard Overview

* Total Balance, Income, and Expenses cards
* Trend visualization (line chart)
* Spending breakdown (pie chart)

### Transactions

* Add/Delete transactions (Admin only)
* Search by category
* Filter by type and date
* Dynamic total calculation
* Empty state handling

### Role-Based UI

* Viewer: Read-only access
* Admin: Full control (add/delete transactions)

### Insights

* Highest spending category
* Monthly comparison
* Total expense analysis

### Enhancements

* Persistent data using localStorage
* Smooth animations using Framer Motion
* Responsive layout
* Clean modular architecture

---

## Tech Stack

* React (Vite)
* Zustand (State Management)
* Recharts (Data Visualization)
* CSS Modules
* Framer Motion

---

## Project Structure

src/

* components/
* pages/
* store/
* styles/

---

## Setup Instructions

```bash
npm install
npm run dev
```

---

## Key Design Decisions

* Used Zustand for simplicity and scalability
* CSS Modules for modular styling
* Focused on UX clarity over complexity
* Implemented role-based UI for realistic interaction

---

## Future Improvements

* Export transactions (CSV)
* Dark/Light mode toggle
* Advanced analytics
* Backend integration
## Deployment Note

The application is successfully deployed and accessible via the live link below.

Due to environment-specific build inconsistencies on automated deployment platforms, the final production deployment was completed using a verified build output to ensure reliability.

Live Demo:  https://finance-dashboard-lemon-three.vercel.app 

---

## Author

Aseem Anand
