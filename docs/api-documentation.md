1) Authentication and User APIs

Base path: /api/vi/user

Method	Endpoint	Purpose
POST	/register	Register a new user
POST	/login	User login
POST	/logout	User logout
GET	/me	Get logged-in user
PUT	/profile	Update user profile
PUT	/change-password	Change password
POST	/forgot-password	Request password reset
POST	/reset-password/:token	Reset password
POST	/verify-email/:token	Verify email