// Core pet state model used by all UI actions.
interface PetInfo {
  name: string;
  weight: number;
  happiness: number;
  distance: number;
}

// Initial values shown when the page first loads.
const petInfo: PetInfo = {
  name: "Discord Kitten",
  weight: 12,
  happiness: 8,
  distance: 10,
};

// ===== CHROME DEVTOOLS EXAMPLES: MESSAGE LOGGING =====

// Log Info - Used for informational messages
function logInfoExample(): void {
  console.info("ℹ️ [INFO] Pet was just fed! Happiness is now:", petInfo.happiness);
  console.info("This is useful for tracking important events in the application.");
}

// Log Warning - Used for potential issues
function logWarningExample(): void {
  console.warn("⚠️ [WARNING] Pet happiness is dropping:", petInfo.happiness);
  console.warn("Consider playing with your pet soon!");
}

// Log Error - Used for errors
function logErrorExample(): void {
  console.error("❌ [ERROR] Pet weight is critically low:", petInfo.weight);
  console.error("The pet needs immediate attention!");
}

// Log Table - Display data in table format (great for objects and arrays)
function logTableExample(): void {
  console.log("📊 Current Pet Status Table:");
  console.table(petInfo);
  
  // Example with array of data
  const petHistory = [
    { action: "Treat", happiness: 9, weight: 13, timestamp: "12:01" },
    { action: "Play", happiness: 10, weight: 12, timestamp: "12:05" },
    { action: "Exercise", happiness: 9, weight: 10, timestamp: "12:10" }
  ];
  console.log("📊 Pet Action History:");
  console.table(petHistory);
}

// Log Group - Group related logs together
function logGroupExample(): void {
  console.group("🐱 Pet Interaction Group");
  console.log("User clicked Treat button");
  console.log("Happiness before: 8");
  petInfo.happiness += 1;
  console.log("Happiness after: " + petInfo.happiness);
  console.log("Weight updated to: " + petInfo.weight);
  console.groupEnd();
  
  // Nested groups
  console.group("🎮 Nested Group Example");
  console.log("Level 1: Main action");
  console.group("Level 2: Sub-action");
  console.log("Processing pet stats...");
  console.log("Validating constraints...");
  console.groupEnd();
  console.log("Back to level 1");
  console.groupEnd();
}

// Log Custom - Using styling with CSS in console
function logCustomExample(): void {
  const kittyStyle = "color: #ff6b9d; font-size: 16px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);";
  console.log("%c🎀 Custom Styled Console Message!", kittyStyle);
  
  console.log("%cPet Name: Discord Kitten", "color: #4285f4; font-size: 14px;");
  console.log("%cStatus: Happy & Healthy", "color: #34a853; font-size: 14px; font-weight: bold;");
  console.log("%cNext Action Needed:", "color: #ea4335; font-size: 12px;");
}

// ===== CHROME DEVTOOLS EXAMPLES: NETWORK & RUNTIME ERRORS =====

// Cause 404 Network Error - Try to fetch a non-existent resource
function cause404Error(): void {
  console.log("🌐 Attempting to fetch non-existent image (will cause 404)...");
  fetch("/images/nonexistent-pet.png")
    .then(response => {
      if (!response.ok) {
        console.error("❌ Network Error - 404:", response.status, response.statusText);
      }
      return response;
    })
    .catch(error => console.error("Fetch error:", error));
}

// Cause TypeError - Intentional type error for debugging
function causeTypeError(): void {
  console.log("🔴 Deliberately causing a TypeError...");
  try {
    // This will cause: TypeError: Cannot read property 'toUpperCase' of undefined
    const undefinedVariable: any = undefined;
    const result = undefinedVariable.toUpperCase();
  } catch (error) {
    console.error("❌ TypeError caught:", error);
  }
}

// Cause Performance Violation - Long-running operation
function causePerformanceViolation(): void {
  console.log("⏱️ Starting long-running operation...");
  console.time("Heavy Computation");
  
  // Simulate heavy computation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  
  console.timeEnd("Heavy Computation");
  console.log("Computation complete. This may have triggered a performance violation warning.");
}

// ===== CHROME DEVTOOLS EXAMPLES: FILTERING & MESSAGE SOURCE =====

// Filter by Message Source - Create messages from different parts of code
function demonstrateMessageSources(): void {
  // From different "modules"
  console.log("[PET-CONTROLLER] Pet state updated");
  console.log("[UI-RENDERER] Rendering pet image");
  console.log("[DATA-VALIDATOR] Checking pet constraints");
  console.log("[EVENT-HANDLER] Button click processed");
}

// Filter by Text - Various message types for filtering
function filterByTextExamples(): void {
  console.log("User action: clicked treat button");
  console.log("User action: clicked play button");
  console.warn("System warning: low memory");
  console.log("Database query: fetching pet data");
  console.error("System error: connection failed");
}

// ===== CHROME DEVTOOLS EXAMPLES: DEBUGGING & BREAKPOINTS =====

// Example 1: Intentional Bug for Debugging - Division by zero scenario
let bugCounter = 0;
function reproduceBugExample(): void {
  console.log("🐛 Reproducing a common bug: division by zero");
  
  bugCounter++;
  const divisor = bugCounter === 3 ? 0 : bugCounter;
  
  // This will cause unexpected behavior when divisor is 0
  const result = 100 / divisor;
  console.log("Result of 100 / " + divisor + " = " + result);
  
  if (!isFinite(result)) {
    console.error("❌ BUG DETECTED: Division resulted in Infinity!");
  }
}

// Example 2: Variable Inspection - Function with multiple variables to inspect
function variableInspectionExample(): void {
  // These variables can be inspected in the Scope pane when breakpoint is hit
  const petName: string = petInfo.name;
  const petWeight: number = petInfo.weight;
  const petHappiness: number = petInfo.happiness;
  const isHappy: boolean = petHappiness > 5;
  const petStats = { name: petName, weight: petWeight, happiness: petHappiness };
  
  console.log("📍 Set a breakpoint here to inspect variables in the Scope pane");
  console.log("Variable inspection complete"); // Set breakpoint here
}

// Example 3: Watch Expressions Example
function watchExpressionsExample(): void {
  let counter = 0;
  const max = 5;
  
  console.log("Starting loop - you can watch these expressions in DevTools:");
  console.log("Add watches: counter, max, counter < max, counter * 2");
  
  for (counter = 0; counter < max; counter++) {
    console.log("Counter iteration:", counter);
    // During debugging, you can watch these expressions change
  }
}

// Example 4: Pause on Exception - Function that throws an error
function pauseOnExceptionExample(): void {
  console.log("⏸️ This function will throw an error for 'Pause on Exception' practice");
  
  function problematicFunction(): void {
    const petName = "Discord Kitten";
    // Attempt to access property that doesn't exist
    const result = (petName as any).nonexistentProperty.getValue();
  }
  
  try {
    problematicFunction();
  } catch (error) {
    console.error("Exception caught:", error);
  }
}

// Example 5: Step Through Code - Function with multiple statements
function stepThroughCodeExample(): void {
  console.log("🔍 Stepping through this function:");
  
  // Step 1: Initialize
  let step = 1;
  console.log("Step", step++, ": Variables initialized");
  
  // Step 2: Check condition
  const shouldContinue = petInfo.happiness > 0;
  console.log("Step", step++, ": Condition checked:", shouldContinue);
  
  // Step 3: Modify data
  petInfo.happiness = Math.min(petInfo.happiness + 1, 100);
  console.log("Step", step++, ": Pet happiness updated to:", petInfo.happiness);
  
  // Step 4: Return result
  console.log("Step", step, ": Execution complete");
}

// ===== INITIALIZATION & EVENT BINDING =====

// jQuery-ready block: bind button actions and render initial state.
$(function (): void {
  checkAndUpdatePetInfoInHtml();

  $(".treat-button").bind("click", clickedTreatButton);
  // Modern equivalent: $(".treat-button").on("click", clickedTreatButton);
  $(".button-container").delegate(".play-button", "click", clickedPlayButton);
  // Modern equivalent: $(".button-container").on("click", ".play-button", clickedPlayButton);
  $(".exercise-button").on("click", clickedExerciseButton);
  $(".call-button").on("click", clickedCallButton);
  
  // Bind DevTools demo buttons
  $(".devtools-log-info").on("click", logInfoExample);
  $(".devtools-log-warning").on("click", logWarningExample);
  $(".devtools-log-error").on("click", logErrorExample);
  $(".devtools-log-table").on("click", logTableExample);
  $(".devtools-log-group").on("click", logGroupExample);
  $(".devtools-log-custom").on("click", logCustomExample);
  
  $(".devtools-cause-404").on("click", cause404Error);
  $(".devtools-cause-typeerror").on("click", causeTypeError);
  $(".devtools-cause-violation").on("click", causePerformanceViolation);
  
  $(".devtools-message-sources").on("click", demonstrateMessageSources);
  $(".devtools-filter-text").on("click", filterByTextExamples);
  
  $(".devtools-reproduce-bug").on("click", reproduceBugExample);
  $(".devtools-variable-inspection").on("click", variableInspectionExample);
  $(".devtools-watch-expressions").on("click", watchExpressionsExample);
  $(".devtools-pause-exception").on("click", pauseOnExceptionExample);
  $(".devtools-step-through").on("click", stepThroughCodeExample);
  
  console.log("🚀 Discord Kitten App loaded! Open DevTools (F12) to see console logging examples.");
});

// Adds and removes a temporary CSS class to trigger button animations.
function animateButton(buttonSelector: string): void {
  const $button = $(buttonSelector);
  $button.addClass("animating");
  setTimeout(() => {
    $button.removeClass("animating");
  }, 600);
}

// Treat increases both happiness and weight.
function clickedTreatButton(): void {
  animateButton(".treat-button");
  console.log("[EVENT] Treat button clicked - updating pet stats");
  petInfo.happiness += 1;
  petInfo.weight += 1;
  checkAndUpdatePetInfoInHtml();
}

// Play boosts happiness but burns a little weight.
function clickedPlayButton(): void {
  animateButton(".play-button");
  console.log("[EVENT] Play button clicked - increasing happiness, decreasing weight");
  petInfo.happiness += 2;
  petInfo.weight -= 1;
  checkAndUpdatePetInfoInHtml();
}

// Exercise lowers both happiness and weight.
function clickedExerciseButton(): void {
  animateButton(".exercise-button");
  console.log("[EVENT] Exercise button clicked - decreasing both happiness and weight");
  petInfo.happiness -= 1;
  petInfo.weight -= 2;
  checkAndUpdatePetInfoInHtml();
}

// Call brings the pet closer by reducing distance.
function clickedCallButton(): void {
  animateButton(".call-button");
  console.log("[EVENT] Call button clicked - pet is coming closer");
  petInfo.happiness += 1;
  petInfo.distance -= 2;
  checkAndUpdatePetInfoInHtml();
}

// Single update pipeline keeps data checks and UI rendering consistent.
function checkAndUpdatePetInfoInHtml(): void {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

// Prevents stats from dropping below zero.
function checkWeightAndHappinessBeforeUpdating(): void {
  if (petInfo.weight < 0) {
    petInfo.weight = 0;
    console.warn("[CONSTRAINT] Pet weight clamped to 0");
  }

  if (petInfo.happiness < 0) {
    petInfo.happiness = 0;
    console.warn("[CONSTRAINT] Pet happiness clamped to 0");
  }

  if (petInfo.distance < 0) {
    petInfo.distance = 0;
    console.warn("[CONSTRAINT] Pet distance clamped to 0");
  }
}

// Renders the latest stats and swaps the image based on happiness.
function updatePetInfoInHtml(): void {
  $(".name").text(petInfo.name);
  $(".weight").text(petInfo.weight);
  $(".happiness").text(petInfo.happiness);
  $(".distance").text(petInfo.distance);

  // Show a treat image when happiness is high; otherwise show the kitten.
  if (petInfo.happiness > 30) {
    $(".pet-image").attr("src", "images/treat.png");
    $(".pet-image").attr("alt", "A treat for your kitten");
  } else {
    $(".pet-image").attr("src", "images/kitten.png");
    $(".pet-image").attr("alt", "A discord kitten");
  }
}
