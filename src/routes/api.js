const express = require('express');
const router = express.Router();
const StudentController=require("../controllers/StudentController");
const WorkController=require("../controllers/WorkController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");



// Student Manage
router.post("/register",StudentController.register);
router.post("/login",StudentController.login);
router.get("/RecoverVerifyEmail/:email",StudentController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",StudentController.RecoverVerifyOTP);
router.post("/RecoverResetPass",StudentController.RecoverResetPass);

// Create
router.post("/CreateWork", AuthVerifyMiddleware, WorkController.CreateWork);

// Read
router.get("/ReadWork", AuthVerifyMiddleware, WorkController.ReadWork);
router.get("/ReadWorkByID/:id", AuthVerifyMiddleware, WorkController.ReadWorkByID);

// Update
router.delete("/UpdateWork/:id", AuthVerifyMiddleware, WorkController.UpdateWork);

// Delete
router.get("/DeleteWork/:id", AuthVerifyMiddleware, WorkController.DeleteWork);

module.exports = router;