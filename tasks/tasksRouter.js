
const express = require("express")
const db = require("../tasks/tasks-model")
const { validateTask, validateTasksId } =require("../middleware/tasks")


const router = express.Router()


// to get all tasks
router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await db.getTasks()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

// to get a specific task
router.get("/tasks/:id", validateTasksId(), (req, res) => {
    res.status(200).json(req.tasks);
  });

// to add a tasks
router.post("/tasks", validateTask(), async (req, res, next) => {
    try {
      const tasks = await db.insertTasks(req.body);
  
      res.status(201).json(tasks);
    } catch (error) {
      next(error);
    } 
  });





module.exports = router