# HW10 Screenshot & PDF Guide

## Overview
This guide walks you through taking screenshots of each Chrome DevTools feature and creating a professional PDF report.

## Prerequisites

### Software Needed
1. **Chrome Browser** - Latest version
2. **Local Web Server** - To serve the HTML file
3. **Screenshot Tool** - Built into your OS or use Snagit/ShareX
4. **PDF Creator** - Microsoft Word, Google Docs, or LibreOffice

### Starting the Application

```bash
# Navigate to project folder
cd comp484-project2-hw10

# Start a local web server (choose one)
python -m http.server 8000
# or
npx http-server
# or
python3 -m http.server 8000
```

Then open: `http://localhost:8000` in Chrome

## Screenshot Workflow

### 1. Setting Up DevTools

1. Press **F12** to open DevTools
2. Click **Console** tab
3. For best screenshots:
   - Resize browser window so content is visible with DevTools open
   - Make DevTools take up about half the screen
   - Set Console filter to show all messages

### 2. Taking Screenshots

#### Windows Screenshot
- **Full screenshot**: Print Screen or Fn+Print Screen
- **Active window**: Alt+Print Screen
- **Region**: Shift+Windows+S for Windows 10+
- **Better tool**: Use ShareX (free and powerful)

#### Mac Screenshot
- **Full screenshot**: Cmd+Shift+3
- **Selected area**: Cmd+Shift+4
- **Copy to clipboard**: Add Space after Cmd+Shift+4

#### Linux Screenshot
- **Full screenshot**: Print Screen
- **Selected area**: Shift+Print Screen
- **Tool**: Use Gnome Screenshot or similar

## Step-by-Step Screenshot Guide

### Screenshot 1: Console - Info Message
**Button to Click**: "Log Info"
**DevTools Tab**: Console
**What to capture**: 
- The info message with blue "ℹ️" icon
- Entire console output showing the message

**Instructions**:
1. Click "Log Info" button on the page
2. Immediately take screenshot of Console tab
3. Make sure message is visible and clear

---

### Screenshot 2: Console - Warning Message
**Button to Click**: "Log Warning"
**DevTools Tab**: Console
**What to capture**: 
- Yellow warning background
- Warning icon (⚠️)
- Timestamp or message details

**Instructions**:
1. Scroll Console to clear previous output (optional)
2. Click "Log Warning" button
3. Screenshot showing warning in yellow

---

### Screenshot 3: Console - Error Message
**Button to Click**: "Log Error"
**DevTools Tab**: Console
**What to capture**: 
- Red error background
- Error icon (❌)
- Error counter at top of Console

**Instructions**:
1. Click "Log Error" button
2. Note the error counter increased
3. Capture the red error message

---

### Screenshot 4: Console - Table Format
**Button to Click**: "Log Table"
**DevTools Tab**: Console
**What to capture**: 
- Table with column headers
- Pet data in table format
- Pet History table below

**Instructions**:
1. Click "Log Table" button
2. Scroll down to see the complete table
3. Take screenshot showing both tables
4. **Optional**: Click column header to show sorting capability

---

### Screenshot 5: Console - Grouped Messages
**Button to Click**: "Log Group"
**DevTools Tab**: Console
**What to capture**: 
- Collapsible group arrow
- Group title (🐱 Pet Interaction Group)
- Grouped messages indented inside
- Nested group structure

**Instructions**:
1. Click "Log Group" button
2. You should see groups with collapse/expand arrows
3. Take screenshot showing both expanded groups
4. **Bonus**: Take a second screenshot with groups collapsed to show the arrow

---

### Screenshot 6: Console - Custom Styled Messages
**Button to Click**: "Log Custom (Styled)"
**DevTools Tab**: Console
**What to capture**: 
- Colored text (pink, blue, green)
- Different font sizes
- Styled message standing out from regular text

**Instructions**:
1. Click "Log Custom (Styled)" button
2. Capture the styled messages with custom colors and formatting
3. Show how custom styling makes messages stand out

---

### Screenshot 7: Network Tab - 404 Error
**Button to Click**: "Cause 404 Error"
**DevTools Tab**: Network
**What to capture**: 
- Failed request in red
- GET request to /images/nonexistent-pet.png
- Status code "404 Not Found"
- Request size and timing

**Instructions**:
1. Click on **Network** tab BEFORE clicking the button
2. Click "Cause 404 Error" button on the page
3. Look for the red entry in the network table
4. Take screenshot showing:
   - The red failed request
   - The URL
   - The 404 status
   - The size/time columns

---

### Screenshot 8: Console - TypeError
**Button to Click**: "Cause TypeError"
**DevTools Tab**: Console
**What to capture**: 
- Red error message
- TypeError description
- Stack trace showing file and line number
- Error icon

**Instructions**:
1. Clear Console (right-click → Clear console)
2. Click "Cause TypeError" button
3. You should see error caught and logged
4. Capture the error with its description

---

### Screenshot 9: Performance Tab - Long Task
**Button to Click**: "Cause Performance Violation"
**DevTools Tab**: Performance (advanced)
**What to capture**: 
- Performance timeline
- Long task indicator (yellow/orange bar)
- Time measurements
- Performance warning

**Instructions**:
1. Click on **Performance** tab
2. Click the **Record** button (red circle)
3. Immediately click "Cause Performance Violation" button
4. Wait for the heavy computation to finish
5. Click Record button again to stop
6. Take screenshot of:
   - The timeline showing the long task
   - The yellow/orange colored bar indicating the long computation

---

### Screenshot 10: Sources Tab - Code with Breakpoint
**Button to Click**: "Variable Inspection"
**DevTools Tab**: Sources
**What to capture**: 
- Code editor showing script.js
- Line with breakpoint (blue dot on line number)
- Function name in the code

**Instructions**:
1. Click on **Sources** tab
2. In the left panel, click on **script.js**
3. Find a function and click the line number to set a breakpoint (blue dot appears)
4. Take screenshot showing the code and the blue breakpoint dot
5. Example function to breakpoint: `variableInspectionExample()` around line 180

---

### Screenshot 11: Sources Tab - Scope Pane
**Button to Click**: "Variable Inspection" (with breakpoint set)
**DevTools Tab**: Sources (Scope section on right)
**What to capture**: 
- Right panel showing Scope
- Local scope with variables
- Expanded object properties
- Variable values and types

**Instructions**:
1. With breakpoint set from previous step
2. Click "Variable Inspection" button to pause at breakpoint
3. Look at right panel under "Scope"
4. Expand "Local" to see variables like:
   - petName: "Discord Kitten"
   - petWeight: 12
   - petStats: Object
5. Take screenshot showing:
   - Expanded Local scope
   - Variable names and values
   - Types displayed next to values

---

### Screenshot 12: Sources Tab - Watch Expressions
**Button to Click**: "Watch Expressions Example"
**DevTools Tab**: Sources (Watch section on right)
**What to capture**: 
- Watch section with added expressions
- Expression values displayed
- How values update as code executes

**Instructions**:
1. Click on **Watch** section in right panel
2. Click + icon to add expression
3. Type expressions like:
   - `counter`
   - `max`
   - `counter < max`
4. Click "Watch Expressions Example" button
5. Take screenshot showing:
   - The watch expressions
   - Their current values
   - How they're tracked

---

### Screenshot 13: Console - Message Filtering
**Button to Click**: Several demo buttons
**DevTools Tab**: Console (filter box)
**What to capture**: 
- Filter box at top of Console
- Dropdown showing filter options
- Filtered results
- Icons for Error/Warning/Log levels

**Instructions**:
1. Click multiple demo buttons to generate messages:
   - "Log Info"
   - "Log Warning" 
   - "Log Error"
2. In Console, click the **filter funnel icon**
3. Show different filter options:
   - Uncheck "Info" to hide info messages
   - Show only errors by unchecking others
4. Take screenshot showing the filter menu/options

---

### Screenshot 14: Console - Text Filter
**Button to Click**: "Show Message Sources"
**DevTools Tab**: Console (with filter input)
**What to capture**: 
- Filter input box with text typed in
- Filtered results based on search text
- Message source tags like [PET-CONTROLLER], [UI-RENDERER]

**Instructions**:
1. Click "Show Message Sources" button multiple times
2. In Console, type in filter box: `CONTROLLER`
3. Notice only [PET-CONTROLLER] messages appear
4. Take screenshot showing:
   - Filter input with text
   - Filtered results below
   - Source tags visible on messages

---

### Screenshot 15: Console - Regex Filter
**Button to Click**: "Show Message Sources"
**DevTools Tab**: Console (filter with regex enabled)
**What to capture**: 
- Filter box with regex pattern
- Regex filter icon enabled
- Filtered results based on pattern

**Instructions**:
1. Generate some messages again
2. Click the **regex icon** in filter (looks like `/.*/)
3. Type regex pattern: `/\[.*\]/` (matches text in brackets)
4. Take screenshot showing:
   - Regex icon highlighted
   - Pattern in filter box
   - Only bracketed messages visible

---

## Creating the PDF Report

### Option 1: Using Microsoft Word (Recommended)

1. **Open Word** and create a new document
2. **Add title page**:
   - Title: "Chrome DevTools Implementation Report"
   - Subtitle: "HW10 - CSUN CS484"
   - Date and your name
3. **Add table of contents** (Insert → Table of Contents)
4. **For each screenshot**:
   - Add heading (e.g., "1. Console Info Message")
   - Paste screenshot
   - Add 2-3 lines of explanation
   - Example text:
     ```
     1. Console Info Message
     
     [Screenshot here]
     
     The console.info() method displays informational messages. 
     Notice the blue "ℹ️" icon next to the message. This level 
     is useful for tracking application events without alerting 
     the user to potential problems.
     ```
5. **Add sections**:
   - Introduction
   - Message Logging Examples (6 screenshots)
   - Browser Messages (3 screenshots)
   - Filtering (3 screenshots)
   - Debugging & Breakpoints (3 screenshots)
   - Conclusion
6. **Format**:
   - Use consistent fonts (Calibri or Arial)
   - Number pages
   - Add headers/footers with "HW10 - Chrome DevTools"
7. **Export as PDF**: File → Save As → PDF

### Option 2: Using Google Docs

1. Go to docs.google.com and create new document
2. Rename: "HW10_ChromeDevTools_Report"
3. Set up:
   - Title, date, student name
   - Headings for each section
4. **Insert screenshots**:
   - Insert → Image → Upload from computer
   - Resize image to fit nicely
   - Add caption below each image
5. **Add descriptions** under each screenshot
6. **Download as PDF**: File → Download → PDF Document

### Option 3: Using LibreOffice Writer (Free)

1. Create new document
2. Add title page and content sections
3. Insert → Image to add screenshots
4. Format document with styles
5. File → Export as PDF

## PDF Content Checklist

Your PDF should include:

### Required Sections
- ✓ Title page (Name, Date, Assignment)
- ✓ Introduction (What is Chrome DevTools, why it matters)
- ✓ Message Logging (6 screenshots + explanations)
- ✓ Browser Messages (3 screenshots + explanations)
- ✓ Filtering Messages (3 screenshots + explanations)
- ✓ Debugging & Breakpoints (3 screenshots + explanations)
- ✓ Conclusion (Summary of learning)

### Each Screenshot Should Include
- ✓ Screenshot image
- ✓ Clear caption with number and title
- ✓ 3-5 sentences explaining what's shown
- ✓ Key observations or lessons learned

### PDF Quality Checklist
- ✓ All screenshots clear and readable
- ✓ Consistent formatting throughout
- ✓ Professional appearance
- ✓ Proper spelling and grammar
- ✓ Page numbers
- ✓ File size reasonable (under 10MB)

## Uploading to GitHub

1. **Save PDF** to: `assets/HW10_ChromeDevTools_Report.pdf`
   
   ```bash
   # From project folder
   cp ~/Downloads/HW10_Report.pdf comp484-project2-hw10/assets/HW10_ChromeDevTools_Report.pdf
   ```

2. **Add and commit**:
   
   ```bash
   cd comp484-project2-hw10
   git add assets/HW10_ChromeDevTools_Report.pdf
   git commit -m "Add HW10 Chrome DevTools PDF report with screenshots"
   ```

3. **Push to GitHub**:
   
   ```bash
   git push origin main
   ```

## Troubleshooting Screenshots

### Screenshot is Blurry
- Use a higher resolution display
- Take screenshot at 100% zoom
- Use OS native screenshot tool rather than browser's

### DevTools Text Too Small
- Zoom DevTools: Ctrl++ (Windows) or Cmd++ (Mac)
- This will increase text size in the screenshot

### Can't See Both Code and Breakpoint
- Resize DevTools window
- Position breakpoint on-screen by scrolling
- Take cropped screenshot of just the relevant area

### Console Messages Disappeared
- They scroll off the top
- Right-click console → Clear to start fresh
- Click demo button again to regenerate message

## Final Submission

Your GitHub repository should contain:

```
comp484-project2-hw10/
├── README_HW10.md                          # Instructions
├── assets/
│   ├── DEVTOOLS_GUIDE.html                # Reference guide
│   └── HW10_ChromeDevTools_Report.pdf      # ← YOUR PDF REPORT
├── index.html
├── script.ts
├── script.js
├── style.css
└── images/
```

**Submit**: GitHub repository link to the instructor

---

**Tips for Success**:
- Take screenshots during the actual interaction (button click)
- Include DevTools actively showing the feature
- Add explanatory text to each screenshot
- Make PDF professional and well-organized
- Test all buttons before taking final screenshots
- Save screenshots as PNG (higher quality than JPEG)

Good luck! 🚀
