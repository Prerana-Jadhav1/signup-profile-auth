# Signup Profile Auth

A React authentication system with a Signup page and a Profile page, built using React Router, Redux, and localStorage.

## Overview

- **Signup Page (`/`)** — Collects Full Name, Email, Password, and Confirm Password. Validates that all fields are mandatory, generates a random access token on successful signup, stores the user and token in `localStorage`, updates Redux state, shows a success message, and redirects to `/profile`.
- **Profile Page (`/profile`)** — Displays the signed-up user's Full Name, Email, and Password from Redux state. Provides a Logout button that clears `localStorage` and Redux state, then redirects to `/`.
- **Redirects** — `useEffect` is used on both pages: `/profile` redirects to `/` if there is no access token, and `/` redirects to `/profile` if an access token already exists.

## Tech Stack

- React 16
- React Router DOM v5
- Redux + React-Redux
- Webpack 4 (dev server + production build)

## Project Structure

```
src/
  components/
    App.js        # Router setup
    Header.js      # Navigation (Signup / Profile links)
    Signup.js       # Signup form + validation + success/error messages
    Profile.js       # Displays user info + logout
  redux/
    actions/authActions.js
    reducers/authReducer.js
    reducers/index.js
    store.js
  styles/App.css
  index.js
  index.html
```

## Scripts

```bash
npm install     # install dependencies
npm start        # run dev server (webpack-dev-server)
npm run build     # production build
```

## Key Features

- Mandatory field validation on Signup (`All the fields are mandatory`)
- Random access token generation on signup
- User details + access token persisted in `localStorage`
- Redux state (`auth.user`, `auth.accessToken`) hydrated from `localStorage` on app load
- Success message shown in green on successful signup
- Logout clears both `localStorage` and Redux state
