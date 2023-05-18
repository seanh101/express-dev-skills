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
  // When you run this function you are not passing in and `id` to this function you are passing in a skill name. One of the above skills in the skills array.
  // Since you are passing in a skill name you do not need to parseInt here because we are not dealing with numbers. We are dealing with a skill name and it already comes from req.params as a string.
  // So we can remove the parseInt(id) and just use id.
    // id = parseInt(id)
    // Here since it's again a skill name we are searching for we need to match for that skill name in the skills array.
    return skills.find(skill => skill.skill === id)
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
  
  // I want to put a small flag here on this create function. We never want to have a function that takes our data and changes it from what we are modeling in the database. I know that we are not using a real database here and that with Mongoose it will prevent errors like this from occurring but we should be mindful of this pattern and try to to do it.
  // The skill objects that are being housed in the mock database array are being models like this:
  // { skill: 'HTML', learned: true }
  // But when we create them here they end up looking like this:
  // { skill: 'HTML', learned: true, id: 123456 }
  // We are adding an id property to the skill object that is not modeled in the other skill objects. All of our skill objects should look the same. 
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