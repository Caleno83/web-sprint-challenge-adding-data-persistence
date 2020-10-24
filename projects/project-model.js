const db = require('../data/config');

function getProjects() {
  return db('projects');
}

function insertProjects(projects) {
    return db('projects')
    .insert(projects, "id")
    .then(ids => ({ id: ids[0] }))
}

function getResources() {
    return db('resources')
}

function insertResources(resources) {
    return db('resources')
    .insert(resources, "id")
    .then(ids => ({ id: ids[0] }))
}



function getTasks() {
    return db('tasks')
}

function insertTasks(tasks) {
    return db('tasks')
    .insert(tasks, "id")
    .then(ids => ({ id: ids[0] }))
}


module.exports = {
  getProjects,
  getResources,
  getTasks, 
  insertProjects,
  insertResources, 
  insertTasks

};