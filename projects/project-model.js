const db = require('../data/config');

// to get all projects
function getProjects() {
  return db('projects');
}

// to get a specific project by id
function getProjectsById(id) {
    return db("projects")
    .where({ id })
    .first();
}

// to add a project
function insertProjects(projects) {
    return db('projects').insert(projects).then((ids) => {
      return getProjectsById(ids[0]);
    });
  }

// to get all resources
function getResources() {
    return db('resources')
}

// to get a specific resource by id
function getResourcesById(id) {
    return db("resources")
    .where({ id })
    .first();
}

// to add a resource
function insertResources(resources) {
    return db('resources').insert(resources).then((ids) => {
      return getResourcesById(ids[0]);
    });
  }



module.exports = {
  getProjects,
  getProjectsById,
  getResources,
  getResourcesById,
  insertProjects,
  insertResources, 
};