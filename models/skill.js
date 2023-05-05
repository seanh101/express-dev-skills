const skills = [
    { skill: 'HTML', learned: true },
	{ skill: 'Javascript', learned: true },
	{ skill: 'CSS', learned: true },
    { skill: 'Python', learned: false },
]

// READ - Index get all of a data (todos)
function getAll() {
    return skills
}

// READ - SHow get 1 object based on the "id"
function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function update(id, updatedTodo) {
    id = parseInt(id);
    const todo = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
  }

// exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update
}