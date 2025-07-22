const express=require('express');
const router=express.Router();
const { createProject, getProjects, updateProject, deleteProject }=require('../controllers/projectController');
const auth=require('../middleware/authMiddleware');
const{body}=require('express-validator');

router.post(
    '/', 
    auth,
    [
    body('title').notEmpty().withMessage('Title is required'),
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    body('description').optional().isLength({ max: 500 }).withMessage('Description too long'),
    body('deadline').optional().isISO8601().withMessage('Deadline must be a valid date')
  ], createProject);
router.get('/', auth, getProjects);


router.put('/:id', auth,
    [
    body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    body('description').optional().isLength({ max: 500 }).withMessage('Description too long'),
    body('deadline').optional().isISO8601().withMessage('Deadline must be a valid date')
  ], updateProject);

  
router.delete('/:id', auth, deleteProject);

module.exports = router;