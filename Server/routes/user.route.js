import express from 'express';

import isAuthenticated from '../middlewares/isAuthenticated.js';
import isAdmin from '../middlewares/isAdmin.js';
import { deleteUserProfile, getUserProfile, loginUser, logoutUser, registerUser, updateUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(isAuthenticated,getUserProfile);
router.route('/profile/update').put(isAuthenticated,updateUserProfile);
router.route('/profile/delete').delete(isAuthenticated, deleteUserProfile);
router.route('/profile/logout').get(isAuthenticated,logoutUser);

export default router;