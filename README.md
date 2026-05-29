# NSQTech Enterprise Workforce Portal

An enterprise-grade Single Page Application (SPA) built using **Angular 19**, **Node.js**, **Express.js**, and **Tailwind CSS** to simulate a modern workforce management platform with role-based access control, employee management, task allocation, API integration, asynchronous loading, and administrative workflow handling.

---
---
# Live Vercel Deployment
https://nsqtech-enterprise-workforce-portal.vercel.app/login
---
---
# Demo Credentials

The application currently uses a dummy authentication system with locally stored JSON-based credentials for demonstration purposes.

## Admin Access

| Field    | Value    |
| -------- | -------- |
| User ID  | admin    |
| Password | admin123 |
| Role     | Admin    |

---

## General User Access

| Field    | Value        |
| -------- | ------------ |
| User ID  | rahul        |
| Password | 1234    |
| Role     | General User |

---

# Project Overview

This application was developed as part of an Angular + Node.js assessment to demonstrate:

* Angular framework understanding
* Modular architecture
* API integration
* Role-based authentication
* Asynchronous frontend/backend communication
* Dynamic admin operations
* Clean UI/UX design
* Enterprise workflow simulation
* System design thinking

The application simulates a real-world organization portal where:

* Employees can log in and view their workspace
* Admins can manage employees, assign tasks, and control workforce operations
* Frontend and backend communicate through REST APIs
* Application behavior dynamically changes based on employee state

---

# Tech Stack

## Frontend

* Angular 19
* TypeScript
* Tailwind CSS
* Angular HTTP Client
* Angular Routing
* Angular Forms

## Backend

* Node.js
* Express.js
* REST APIs
* Local JSON-based mock database

---

# Features Implemented

## Authentication Module

* Login using:

  * User ID
  * Password
  * Role
* Role-based access:

  * General User
  * Admin
* API-driven authentication
* Dummy backend authentication using JSON storage

---

# Employee Dashboard

General users can:

* View employee profile
* View assigned tasks
* View employee statistics
* View salary breakdown
* View upcoming holidays
* View meetings
* View company assets
* View organization employee directory

---

# Admin Panel

Admins can:

* Add employees dynamically
* Deactivate employees
* View workforce analytics
* Assign tasks dynamically
* Manage employee statuses
* Monitor organizational records
* Control employee activity states

---

# API Architecture

The project uses REST APIs for frontend-backend communication.

## Authentication APIs

| Method | Endpoint        | Purpose    |
| ------ | --------------- | ---------- |
| POST   | /api/auth/login | User Login |

## Employee APIs

| Method | Endpoint                      | Purpose              |
| ------ | ----------------------------- | -------------------- |
| GET    | /api/employees                | Fetch Employees      |
| POST   | /api/employees/add            | Add Employee         |
| PUT    | /api/employees/deactivate/:id | Deactivate Employee  |
| GET    | /api/employees/dashboard-data | Fetch Dashboard Data |
| POST   | /api/employees/assign-task    | Assign Task          |
| GET    | /api/employees/tasks          | Fetch Tasks          |

---

# Async Processing Demonstration

To simulate real-world enterprise API behavior, artificial delays were introduced using:

```js
setTimeout(() => {

}, 2000);
```

This demonstrates:

* asynchronous processing
* loading states
* API wait handling
* frontend synchronization

Loading indicators were integrated into the UI to improve user experience during delayed API responses.

---

# System Design Thinking & UX Decisions

One of the major focuses of this project was implementing practical system-level thinking beyond UI development.

## 1. Secure Login UX

After refresh/reload, login fields are intentionally cleared instead of retaining credentials.

### Why?

This improves:

* privacy
* shared-device security
* user isolation
* enterprise login behavior consistency

---

## 2. Intelligent Task Assignment Logic

While assigning tasks:

* Admin can view all employees
* Only ACTIVE employees are selectable
* Employees marked:

  * On Leave
  * Inactive
    are automatically disabled in the dropdown

### Why?

This prevents:

* invalid task allocation
* assignment conflicts
* operational inconsistencies

This mimics real enterprise HR systems.

---

## 3. Real-Time State Synchronization

When an admin:

* deactivates an employee
* assigns tasks

changes are reflected dynamically across:

* admin panel
* employee dashboard

through API-driven synchronization.

### Why?

This demonstrates:

* centralized state management
* frontend/backend synchronization
* enterprise workflow consistency

---

# UI & Design Philosophy

The UI was designed using:

* glassmorphism
* dark enterprise theme
* responsive layouts
* modular cards
* role-specific dashboards

Focus areas:

* clean spacing
* usability
* admin readability
* dashboard hierarchy
* enterprise aesthetics

---

# Project Structure

## Frontend Structure

```txt
src/app
├── core
│   └── services
├── features
│   ├── admin
│   ├── auth
│   └── dashboard
├── shared
│   └── components
```

---

## Backend Structure

```txt
backend/src
├── data
│   ├── users.json
│   ├── employees.json
│   ├── tasks.json
│   └── dashboard.json
├── routes
│   ├── authRoutes.js
│   └── employeeRoutes.js
└── server.js
```

---

# Key Angular Concepts Used

* Standalone Components
* Dependency Injection
* Services
* HTTP Client
* Routing
* Property Binding
* Event Binding
* Two-Way Data Binding
* Conditional Rendering
* Async API Handling
* Component-Based Architecture

---

# Future Improvements

Potential future upgrades include:

* JWT Authentication
* MongoDB Integration
* Cloud Deployment (AWS/GCP)
* Role-based Route Guards
* Real Database Persistence
* Notification System
* Attendance Tracking
* Device Allocation APIs
* Meeting Scheduling APIs
* Admin Analytics Dashboard

---

# How to Run

## Frontend

```bash
npm install
ng serve
```

Frontend runs on:

```txt
http://localhost:4200
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

# Testing

The APIs can be tested using:

* Browser
* Chrome DevTools Network Tab
* Postman



# Engineering & System Design Decisions

Beyond implementing the assignment requirements, several practical system-level decisions were intentionally incorporated into the application to simulate real enterprise workflow behavior.

These decisions were made to improve:

* operational consistency
* user experience
* security handling
* business validation
* frontend/backend synchronization

---

## 1. Secure Login Experience

### Problem

On refresh, browser-retained credentials can expose sensitive information when the application is used on shared systems.

### Implemented Solution

The login form intentionally resets input fields after refresh/reload instead of preserving credentials.

### Why This Matters

This improves:

* privacy protection
* shared-device security
* user session isolation
* enterprise login consistency

This behavior reflects how production enterprise portals typically handle authentication forms.

---

## 2. Intelligent Employee Filtering During Task Assignment

### Problem

An admin should not be able to assign tasks to:

* inactive employees
* employees currently on leave

However, the admin should still be able to view the complete organizational employee list.

### Implemented Solution

While assigning tasks:

* all employees are visible in the dropdown
* only ACTIVE employees are selectable
* ON LEAVE and INACTIVE employees are dynamically disabled

### Why This Matters

This prevents:

* invalid workforce allocation
* accidental assignment conflicts
* task delivery inconsistencies

This mirrors practical HR and workforce management systems used in enterprise environments.

---

## 3. Real-Time Employee State Synchronization

### Problem

Changes performed in the admin panel should immediately reflect in the employee portal.

### Implemented Solution

When an admin:

* deactivates an employee
* assigns a task

the updates are reflected dynamically across:

* admin dashboard
* employee dashboard

using API-driven frontend/backend synchronization.

### Why This Matters

This demonstrates:

* centralized state handling
* API synchronization
* reactive UI behavior
* enterprise workflow consistency

---

## 4. Simulated Enterprise API Latency

### Problem

Most frontend-only projects do not demonstrate real asynchronous behavior.

### Implemented Solution

Artificial API delays were introduced using:

```js id="0q9j3r"
setTimeout(() => {

}, 2000);
```

to simulate:

* backend processing delays
* network latency
* asynchronous API behavior

### Why This Matters

This demonstrates understanding of:

* async UI states
* loading management
* frontend synchronization
* enterprise-scale API interaction patterns


# Conclusion

This project was built with emphasis on:

* modular architecture
* enterprise workflow simulation
* API communication
* clean UI design
* asynchronous frontend/backend interaction
* practical system-level thinking

The goal was not only to build a functional SPA, but to demonstrate how frontend engineering, backend APIs, and business workflow logic work together in a real-world enterprise environment.
