# Singlish to Sinhala Translator - Playwright Tests

This repository contains automated functional and UI tests for the Singlish to Sinhala Translator: https://www.swifttranslator.com/.
These tests are part of the ITPM module assignment at SLIIT.

## Repository Structure

ITPM_Playwright/
├─ tests/                        # Playwright test scripts
│   └─ siglish-to-sinhala.spec.ts
├─ playwright.config.ts           # Playwright configuration
├─ package.json                   # Node.js dependencies
├─ package-lock.json
├─ .github/workflows/playwright.yml  # GitHub Actions workflow
└─ README.md

## Installation

1. Install Node.js (v18+).  
2. Clone the repository:

git clone git@github.com:praveenshashee/ITPM_PLAYWRIGHT.git
cd ITPM_PLAYWRIGHT

3. Install dependencies:

npm install

## Running the Tests

npx playwright test

- Runs tests in all supported browsers (Chromium, Firefox, WebKit).  
- View HTML report after running:

npx playwright show-report

## Test Cases

- 24+ functional scenarios (sentence structures, greetings, compound/complex sentences, tenses, negation, mixed language, etc.)  
- 1 UI test scenario for real-time output behavior  
- Validation types: Accuracy, Robustness, Real-time update behavior  

Full test cases are in `IT22911780.xlsx`.

## Notes

- Chrome (Chromium) is recommended, but other browsers are supported.  
- English words and technical terms are preserved in output.  
- Short chat-style shorthand like "Thx" is not converted.  

## Submission

- Repository link: https://github.com/praveenshashee/ITPM_PLAYWRIGHT  
- Excel file: `IT22911780.xlsx`
