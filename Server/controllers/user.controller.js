import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import {generateToken} from "../utils/token.js";

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    

    res.status(201).json({  user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(res,user,`Welcome back, ${user.name}! You have successfully logged in.`);

    res.json({ token, user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { name, email } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    const updatedUser = await user.save();
    res.json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);  
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutUser = (req, res) => {
  try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"Logged Out Successfully"
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Failed to logout"
        })
    }
};   