const db = require('../data/config');

// to get all tasks
function getTasks(id) {
    return db('tasks as t')
    .innerJoin("projects as p", "p.id", "t.project_id")
    .select([ "t.id as task_id", "t.task_description", "t.task_notes",  "t.completed", "p.project_name", "p.project_description"])

}

// to get a specific task by id
function getTasksById(id) {
    return db("tasks as t")
    .innerJoin("projects as p", "p.id", "t.project_id")
    .where("t.id", id)
    .select([ "t.id as task_id", "t.task_description", "t.task_notes",  "t.completed", "p.project_name", "p.project_description"])
}

// to add a resource
function insertTasks(tasks) {
    return db('tasks').insert(tasks).then((ids) => {
      return getTasksById(ids[0]);
    });
  }


module.exports = {
  getTasks,
  getTasksById, 
  insertTasks

};