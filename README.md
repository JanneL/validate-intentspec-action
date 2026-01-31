# IntentSpec Validation Action

The official GitHub Action for [IntentSpec](https://intentspec.org) — the open standard for Spec-Driven Development.

Use this action to enforce **Functional Guardrails** in your CI/CD pipeline. It validates that your `intent.md` exists and adheres to the [IntentSpec Schema](https://intentspec.org/schema.json).

## Usage

Add this to your workflow file (e.g., `.github/workflows/intentspec.yml`):

```yaml
name: Validate IntentSpec

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Validate Intent Spec
        uses: JanneL/validate-intentspec-action@v1
        with:
          file: 'intent.md' # Optional (default: intent.md)
```

## Inputs

| Input | Description | Default | Required |
| :--- | :--- | :--- | :--- |
| `file` | Path to the intent markdown file | `intent.md` | No |

## Why use this?

1.  **Prevent Drift:** Ensure AI agents (and humans) have a clear definition of "Done".
2.  **Enforce Structure:** Validate that `objective`, `outcomes`, and `constraints` are defined.
3.  **Governance:** Make IntentSpecs a required part of your PR process.
