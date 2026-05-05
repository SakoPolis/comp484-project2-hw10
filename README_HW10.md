# HW10: Chrome DevTools Implementation

## Project Overview

This is an enhanced version of the Discord Kitten project that implements comprehensive examples for all major Chrome DevTools features as required for HW10. The project demonstrates practical usage of the Chrome Developer Tools for debugging, performance analysis, and code inspection.

## Features Implemented

### 1. Message Logging (6 Examples)

- **Log Info**: Informational messages about application state
- **Log Warning**: Warnings about potential issues
- **Log Error**: Error conditions that need attention
- **Log Table**: Displaying data in table format for easy viewing
- **Log Group**: Organizing related logs into collapsible groups
- **Log Custom**: Styled console messages using CSS

### 2. View Browser Messages (3 Examples)

- **404 Network Error**: Demonstrates network failures when fetching non-existent resources
- **TypeError**: Shows what happens when code tries invalid operations
- **Performance Violation**: Creates long-running operations to detect performance issues

### 3. Filter Messages (5 Methods)

- **Filter by Log Level**: Show only Errors, Warnings, or Info messages
- **Filter by Text**: Search for messages containing specific text
- **Filter by Regular Expression**: Advanced pattern-based filtering
- **Filter by Message Source**: Messages tagged with module names like [PET-CONTROLLER]
- **Filter by User Messages**: Distinguish between application and browser messages

### 4. Debugging & Breakpoints (6 Features)

- **Reproduce a Bug**: Division by zero scenario to demonstrate debugging
- **Set Line-of-Code Breakpoint**: Pause execution at specific lines
- **Variable Inspection**: Inspect values in the Scope Pane
- **Watch Expressions**: Track specific expressions as code executes
- **Step Through Code**: Execute code line-by-line
- **Pause on Exception**: Automatically pause when errors occur

## How to Use

### Starting the Application

1. Navigate to the project directory
2. Run a local web server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```
3. Open `http://localhost:8000` in Chrome
4. Open DevTools with **F12** or **Ctrl+Shift+I** (Windows/Linux) / **Cmd+Option+I** (Mac)

### Testing Each Feature

#### Message Logging Examples
1. Click buttons in the "📋 Message Logging Examples" section
2. Watch the Console tab in DevTools to see each logging type
3. Notice the different colors and formatting for each level

#### Viewing Browser Messages
1. Click "Cause 404 Error" - Go to Network tab to see the failed request
2. Click "Cause TypeError" - Watch Console show the error with stack trace
3. Click "Cause Performance Violation" - Use Performance tab to see the long task

#### Filtering Messages
1. Generate messages by clicking demo buttons
2. In Console, use the filter box (looks like a funnel ⏱️)
3. Type text, enable regex, or select log levels to filter
4. Click "Show Message Sources" to see tagged messages like [PET-CONTROLLER]

#### Debugging with Breakpoints
1. Open Sources tab in DevTools
2. Click line numbers to set breakpoints (blue dots appear)
3. Click a demo button to trigger the function
4. Code execution pauses at the breakpoint
5. Use Step Over/Into/Out buttons to move through code
6. Watch the Scope panel to see variable values

#### Variable Inspection
1. Click "Variable Inspection" button
2. The Sources tab should open with code paused
3. Look at the right panel to see all variables in the Scope pane
4. Expand objects to see their properties
5. Type in Console to evaluate expressions like `petInfo.happiness * 2`

#### Watch Expressions
1. Click "Watch Expressions Example" button
2. In DevTools, click "Watch" section
3. Add expressions like `counter`, `max`, `counter < max`
4. Values update as you step through the code

## File Structure

```
comp484-project2-hw10/
├── index.html              # Main HTML with DevTools demo buttons
├── script.ts              # TypeScript source code with DevTools examples
├── script.js              # Compiled JavaScript (generated from script.ts)
├── style.css              # Styling for the app and demo buttons
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── assets/
│   ├── DEVTOOLS_GUIDE.html    # Comprehensive DevTools guide
│   └── screenshots/            # Screenshots of DevTools features (add these)
└── images/
    ├── kitten.png            # Pet image
    └── treat.png             # Treat reward image
```

## Chrome DevTools Tabs Used

| Tab | Purpose | Features Demonstrated |
|-----|---------|----------------------|
| **Console** | View logs, errors, warnings | All message logging examples |
| **Network** | Monitor HTTP requests | 404 errors, failed requests |
| **Sources** | Debug JavaScript code | Breakpoints, stepping, variable inspection |
| **Performance** | Analyze performance | Long-running operations, performance violations |

## Key Shortcuts in DevTools

| Shortcut | Action |
|----------|--------|
| F12 / Ctrl+Shift+I | Open DevTools |
| Ctrl+Shift+J | Open Console tab |
| Ctrl+Shift+P | Open Command Palette |
| F8 | Resume execution (when paused) |
| F10 | Step Over |
| F11 | Step Into |
| Shift+F11 | Step Out |
| Ctrl+F | Search in console/sources |

## Implementation Details

### TypeScript Source (script.ts)

The TypeScript file includes:

1. **Console Logging Functions** (Lines 19-82)
   - Each function demonstrates a specific logging technique
   - Called when demo buttons are clicked

2. **Error Generation Functions** (Lines 85-133)
   - `cause404Error()`: Fetches non-existent resource
   - `causeTypeError()`: Attempts invalid property access
   - `causePerformanceViolation()`: Long computation loop

3. **Message Filtering Examples** (Lines 136-159)
   - Messages tagged with module names [PET-CONTROLLER], etc.
   - Various message types for filtering demonstrations

4. **Debugging Examples** (Lines 162-246)
   - `reproduceBugExample()`: Division by zero bug
   - `variableInspectionExample()`: Multiple variables to inspect
   - `watchExpressionsExample()`: Loop with watchable expressions
   - `pauseOnExceptionExample()`: Intentional error
   - `stepThroughCodeExample()`: Step-by-step execution

5. **Pet Interaction Functions** (Lines 264-324)
   - Original game logic with added console logging
   - Each button click logs to Console with [EVENT] tags

### HTML Buttons

All demo buttons are in the `<section class="devtools-section">` with classes like:
- `.devtools-log-info`, `.devtools-log-warning`, etc.
- `.devtools-cause-404`, `.devtools-cause-typeerror`, etc.
- `.devtools-variable-inspection`, `.devtools-watch-expressions`, etc.

## Screenshots to Include in PDF

When creating your PDF documentation, include screenshots of:

1. **Console Tab**
   - Info, Warning, Error messages
   - Table output
   - Grouped messages
   - Styled custom messages

2. **Network Tab**
   - Failed 404 request in red
   - Response status showing "404 Not Found"

3. **Sources Tab**
   - Code with breakpoint (blue dot on line number)
   - Scope panel showing local variables
   - Watch expressions panel
   - Step Over/Into/Out buttons

4. **Performance Tab**
   - Long task indicator (yellow/orange bar)
   - Timeline showing performance violation

## Troubleshooting

### DevTools Not Showing Console Output

**Solution**: Make sure you:
1. Pressed F12 to open DevTools
2. Clicked the Console tab
3. Refreshed the page to see initial load message
4. Clicked a demo button to trigger logging

### Breakpoints Not Pausing

**Solution**: Ensure:
1. Breakpoint is set (blue dot visible on line number)
2. Function is actually called (click corresponding button)
3. Code hasn't been minified (use .ts source map)

### Cannot Find script.js in Sources

**Solution**: TypeScript must be compiled:
```bash
npm install  # Install dependencies
npm run build  # Compile TypeScript
```

## Additional Resources

- [Chrome DevTools Console Logging](https://developer.chrome.com/docs/devtools/console/log/)
- [Chrome DevTools JavaScript Debugging](https://developer.chrome.com/docs/devtools/javascript/)
- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/)

## Submission Requirements

✅ GitHub repo with:
- ✓ Original Project 2 files
- ✓ Enhanced script.ts with all DevTools examples
- ✓ Compiled script.js
- ✓ Updated index.html with demo buttons
- ✓ assets/DEVTOOLS_GUIDE.html reference guide
- ✓ assets/screenshots/ folder with DevTools screenshots
- ✓ assets/HW10_ChromeDevTools_Report.pdf (your detailed report with screenshots)

## Author Notes

This project serves as both a functional pet simulator and a comprehensive tutorial for Chrome DevTools. Each demo button is designed to be clicked and observed in real-time with DevTools open, making it an excellent learning tool for understanding debugging techniques in web development.

---

**Last Updated**: May 2026
**Course**: CS484 (Web Programming)
**Assignment**: HW10 - Chrome Dev Tools
