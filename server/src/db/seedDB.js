// const mongoose = require("mongoose");
// TODO: models import

// TODO: Data to seed

// Function to seed the database
async function seedDatabase(model, data) {
  try {
    // Clear the collection
    await model.deleteMany();
    // console.log("Collection cleared"); // will be removed

    // Paste the data
    await model.insertMany(data);
    // console.log("Data successfully pasted"); // will be removed
  } catch (error) {
    console.error("Error:", error);
  }
}

// call the function

seedDatabase();

// preload data with node src/db/seedDB.js
