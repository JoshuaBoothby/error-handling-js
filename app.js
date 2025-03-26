"use strict";

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    const result = a / b;
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  } finally {
    console.log("Execution completed.");
  }
}

async function fetchData() {
  try {
    const response = await fetch("https://httpstat.us/500");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

function greet(name) {
  if (name !== undefined) {
    console.log("Hello, " + name);
  } else {
    console.log("Hello, Guest!");
  }
}

greet();
