# Contributing to IntentSpec Action

Thank you for your interest in contributing! IntentSpec is an open standard, and we welcome tooling improvements.

## Development

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/JanneL/validate-intentspec-action.git
    cd validate-intentspec-action
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build:**
    ```bash
    npm run build
    ```
    This compiles the TypeScript code and bundles it into `dist/index.js` using `ncc`.

4.  **Test:**
    You can test the action locally using the `intentspec` CLI:
    ```bash
    node dist/index.js validate intent.md
    ```

## Releasing

Access to release is currently restricted to maintainers.

## Code Style

-   Use TypeScript.
-   Follow the existing formatting (prettier/eslint).
