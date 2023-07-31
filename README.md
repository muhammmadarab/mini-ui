# Mini Social Media App - Frontend

This is the frontend repository of Mini Social Media App built using Reatt.js and Tailwindcss. The app provides user authentication, post management, and file upload capabilities.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [How To Use](#how-to-use)
- [Deployment](#deployment)

## Overview

The frontend of the Social Media App provides a user-friendly interface to interact with the backend API. It allows users to sign up, log in, create posts, view posts, and upload profile pictures. The app uses JSON Web Tokens (JWT) for authentication, ensuring secure access to user accounts and protecting sensitive data.

## Features

- `User Registration and Authentication:` Users can create accounts and login securely using JWT authentication.
- `Post Management:` Users can create, edit, and delete their posts.
- `File Upload:` Users can upload images and other files to attach to their posts.

## Technologies Used

The frontend of the Social Media App is built using the following technologies:

- `React.js:` Frontend library for building user interfaces.
- `React Router:` For handling client-side routing and navigation within the app.
- `Axios:` For making HTTP requests to the backend API.
- `Tailwind CSS:` A utility-first CSS framework for styling the components.

## Getting Started

To get started with the Social Media App frontend, follow the steps below:

## Setup

1. Clone the repository:

```bash
git clone https://github.com/muhammmad/mini-ui.git
```

2. Change directory to the project folder:

```bash
cd mini-ui
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root of the project and set the backend API URL.

```bash
REACT_APP_BACKEND_API_URL=http://localhost:5000/api
```

5. Start the development server.

```bash
npm start
```

## Folder Structure

The frontend codebase contains:

- `src/`
  - `assets/:` For storing icons and other static files.
  - `components/:` Reusable UI components used throughout the app.
  - `pages/:` Top-level pages or screens of the app.
  - `utils/:` Utility functions and helpers.
  - `App.js:` Main component where routing is defined.
  - `index.js:` Entry point of the app.

## How to Use

- `Register:` Create a new account by providing a username, email, password, and profile picture.
- `Login:` Existing users can log in using their username/email and password.
- `Create Post:` Authenticated users can create a new post by providing a location, description, vibetag and uploading an image/file.
- `Edit/Delete Post:` Users can edit or delete their own posts.

## Deployment

To deploy the frontend of the Social Media App, you can follow these steps:

1. Build the production version of the app:

```bash
npm run build
```

2. Deploy the app to your preferred hosting platform.

## Conclusion

The Mini Social Media App frontend provides a user-friendly interface to interact with the backend API, allowing users to sign up, log in, create posts, view posts, and upload profile pictures. JSON Web Tokens (JWT) are used for secure authentication, ensuring user data is protected. The app is built with React.js, React Router, Axios, and styled with Tailwind CSS.
