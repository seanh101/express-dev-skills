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
    // I want to 
    return skills.find(skill => skill.id === id)
}

// exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne
}