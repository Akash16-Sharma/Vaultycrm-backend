const express=require('express');
const router=express.Router();
const auth=require("../middleware/authMiddleware");
const {
  createTask,
  getTasksByProjects,
  updateTask,
  deleteTask,
  updateStatus,
}=require("../controllers/taskController");


//Protect all task routes
router.use(auth);

// POST /api/tasks
router.post('/', createTask);

// GET /api/tasks/:projectId
router.get('/:projectId', getTasksByProjects);

// PUT /api/tasks/:id
router.put('/:id', updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

//Patch Api
router.patch("/:id/status", auth, updateStatus);

module.exports = router;