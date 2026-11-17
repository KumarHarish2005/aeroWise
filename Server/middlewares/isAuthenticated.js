import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }
    req.id= decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." }); 
  }
};

export default isAuthenticated;