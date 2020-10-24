
const express = require("express")
const db = require("../projects/project-model")

const router = express.Router()

// to get all projects
router.get("/", async (req, res, next) => {
	try {
		const recipe = await db.getProjects()
		res.json(recipe)
	} catch(err) {
		next(err)
	}
})




module.exports = router