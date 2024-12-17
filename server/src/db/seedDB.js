// const mongoose = require("mongoose");

// Function to seed the database
async function seedDatabase(model, data) {
  try {
    // Clear the collection
    await model.deleteMany();
    // console.log("Collection cleared");

    // Paste the data
    await model.insertMany(data);
    // console.log("Data successfully pasted");
  } catch (error) {
    console.error("Error:", error);
  }
}

export default seedDatabase;
