# HW10 - DevTools Implementation (Chrome + Firefox)

This is the submission for the CS484 HW10 assignment: browser DevTools implementation.

## Project Overview

This project is a copy of Project 2 (Discord Kitten pet simulator) that has been enhanced with practical DevTools examples for educational purposes in both Chrome and Firefox.

## What's Included

### Features Implemented

#### 1. Message Logging (6 examples)
- `console.info()` - Informational messages
- `console.warn()` - Warning messages  
- `console.error()` - Error messages
- `console.table()` - Formatted table output
- `console.group()` - Grouped/nested messages
- `console.log()` with CSS styling - Custom styled messages

#### 2. Browser Messages (3 examples)
- **404 Network Error** - Fetch non-existent resource
- **TypeError** - Invalid property access
- **Performance Violation** - Long-running computation

#### 3. Filter Messages (5 methods)
- Filter by log level (Info, Warning, Error)
- Filter by text search
- Filter by regular expression pattern
- Filter by message source tags (e.g., [PET-CONTROLLER])
- Filter by user messages

#### 4. Debugging & Breakpoints (6 features)
- Set line-of-code breakpoints
- Variable inspection in Scope pane
- Watch expressions
- Pause on exception
- Step through code (Step Over, Into, Out)
- Reproduce a bug and apply a fix

## File Structure

```
comp484-project2-hw10/
├── index.html                          # Main HTML with DevTools demo buttons
├── script.ts                           # TypeScript source with DevTools examples
├── script.js                           # Compiled JavaScript
├── style.css                           # Styling for app and demo section
├── package.json                        # Dependencies and build scripts
├── tsconfig.json                       # TypeScript configuration
├── README_HW10.md                      # Detailed implementation guide
├── assets/
│   ├── DEVTOOLS_GUIDE.html            # Interactive guide to DevTools features
│   ├── SCREENSHOT_GUIDE.md            # Instructions for taking screenshots
│   ├── HW10_ChromeDevTools_Report.html # HTML report source
│   ├── HW10_ChromeDevTools_Report.pdf  # Final PDF submission (15 figures)
│   └── screenshots/                    # Screenshot images for the PDF
│       ├── app-overview.png
│       ├── guide-debugging.png
│       ├── guide-filtering.png
│       └── guide-shot-*.png            # 11 additional guide screenshots
├── images/
│   ├── kitten.png
│   ├── treat.png
│   └── near.png
└── sounds/
    └── rare-discord-ringtone.mp3
```

## How to Use

### Running the App

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run build

# Start local web server
python -m http.server 8000
# or
npx http-server
```

Then open `http://localhost:8000` in Chrome or Firefox.

### Testing DevTools Examples

1. Open DevTools with **F12** or **Ctrl+Shift+I** (Windows/Linux) / **Cmd+Option+I** (Mac)
2. Click buttons in the "DevTools Examples (Chrome + Firefox)" section to:
   - See logging examples in the Console tab
   - Trigger errors in the Network tab
    - Set breakpoints in Sources (Chrome) or Debugger (Firefox)
   - Inspect variables and watch expressions

### View the PDF Report

The file `assets/HW10_ChromeDevTools_Report.pdf` contains:
- 15 figure sections with screenshots
- Explanations of each DevTools feature
- Implementation details and code references

## Key Functions in script.ts

### Logging Functions
- `logInfoExample()` - Info message
- `logWarningExample()` - Warning message
- `logErrorExample()` - Error message
- `logTableExample()` - Table format
- `logGroupExample()` - Grouped messages
- `logCustomExample()` - Styled messages

### Browser Message Functions
- `cause404Error()` - Network error
- `causeTypeError()` - Type error
- `causePerformanceViolation()` - Long task

### Filtering Functions
- `demonstrateMessageSources()` - Source tags
- `filterByTextExamples()` - Text filtering
- `filterByRegexExamples()` - Regex filtering
- `filterByUserMessages()` - User message filtering

### Debugging Functions
- `reproduceBugExample()` - Division by zero bug
- `variableInspectionExample()` - Variable inspection
- `watchExpressionsExample()` - Watch expressions
- `pauseOnExceptionExample()` - Exception handling
- `pauseWithDebuggerExample()` - Debugger statement
- `stepThroughCodeExample()` - Step through code
- `applyFixExample()` - Fixed version of bug

## Build Commands

```bash
npm run build     # Compile TypeScript to JavaScript
npm run watch     # Watch mode - recompile on save
npm run clean     # Remove compiled files
```

## Assignment Requirements Met

✅ DevTools console logging examples (6 types)
✅ Browser-generated messages (404, TypeError, performance)
✅ Message filtering examples (5 methods)
✅ Debugging with breakpoints
✅ Variable inspection
✅ Watch expressions
✅ Step-through code execution
✅ Bug reproduction and fix
✅ PDF report with 15 screenshots
✅ GitHub repository with all files

## Submission Details

- **Assignment**: HW10 - Browser DevTools
- **Course**: CS484 Web Programming
- **Date**: May 2026
- **Repository**: GitHub (comp484-project2-hw10)

## Resources

- [Chrome DevTools Console Documentation](https://developer.chrome.com/docs/devtools/console/log/)
- [Chrome DevTools JavaScript Debugging](https://developer.chrome.com/docs/devtools/javascript/)
- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/)
- [Firefox DevTools Documentation](https://firefox-source-docs.mozilla.org/devtools-user/)

---

For questions or issues, refer to the `assets/DEVTOOLS_GUIDE.html` file or the PDF report.
