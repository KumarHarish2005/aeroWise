import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/database.js";

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();  
     
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }         
};

startServer();
