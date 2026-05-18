# LearnPlaywright-Venkata

## Project structure

- `package.json` - project dependencies and metadata
- `playwright.config.js` - Playwright configuration
- `tests/` - test files and folders
  - `example.spec.js`
  - `D11/`
    - `create blog article.spec.js`
    - `create event.spec.js`
    - `create standard page.spec.js`
- `test-results/` - generated test result artifacts
- `playwright-report/` - generated Playwright HTML report and trace assets

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Ensure Playwright is installed via `@playwright/test` in `devDependencies`.

## Running tests

Run all Playwright tests in the `tests` folder:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

Run a folder of tests:

```bash
npx playwright test tests/D11
```

## Configuration

- `playwright.config.js` sets `testDir` to `./tests`
- Uses browser projects: `chromium`, `firefox`, `webkit`, `Microsoft Edge`, and `Google Chrome`
- Base URL is configured for the D11 environment
- Traces, screenshots, and videos are enabled for retries

## Report

After a test run, open the HTML report from:

```bash
npx playwright show-report
```

## Notes

- The repository currently has no custom npm scripts defined in `package.json`.
- Existing tests are organized under the `tests` directory, with a subfolder for `D11` related scenarios.
