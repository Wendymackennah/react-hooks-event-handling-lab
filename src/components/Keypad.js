// Code Keypad Component Here

// Import React
import React from "react";

// Create Keypad component
function Keypad() {
  // Event handler for the change event
  function handleChange(event) {
    console.log("Entering password...");
  }

  // Render method for the component
  return (
    <div>
      {/* Input with the type 'password' and the change event handler */}
      <input
        type="password"
        onChange={handleChange}
        placeholder="Enter password..."
      />
    </div>
  );
}

// Export the Keypad component
export default Keypad;
