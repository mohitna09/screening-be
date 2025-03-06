# Backend Application (Node.js + Express)

This is the backend for your Vite React application, built using Node.js and Express. It serves API requests and communicates with the frontend. The application is configurable via environment variables and supports handling CORS during development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (depends on your preference)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm install
   npm run start
   ```

2. Add the following configuration for CORS handling in .env file at root folder create 1 if not exist:

```bash
FRONTEND_DOMAIN=<unblock-cors-url>
```
