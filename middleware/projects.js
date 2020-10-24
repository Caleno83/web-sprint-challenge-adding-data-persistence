const db = require("../projects/project-model")

function validateProjectId() {
	return async (req, res, next) => {
        try {
          const projects = await db.getProjectsById(req.params.id);
    
          if (projects) {
            req.projects = projects;
            next();
          } else {
            res.status(404).json({
              message: "Invalid project id",
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: "Error retrieving the project",
          });
        }
      };
    }

    function validateProject() {
        return (req, res, next) => {
          if (Object.keys(req.body).length === 0) {
            res.status(400).json({
              message: "missing project data",
            });
          } else if (!req.body.project_name) {
            res.status(400).json({
              message: "missing required project_name field",
            });
          } else {
            next();
          }
        };
      }

module.exports = {
	validateProjectId,
	validateProject,
}