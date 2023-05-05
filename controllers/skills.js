const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }
  
  function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill
    });
  }
  
  function deleteSkill(req, res) {
    Todo.deleteSkill(req.params.id);
    res.redirect('/skills');
  }
  
  function create(req, res) {
    console.log(req.body);
    // Models are responible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }
  
  function newTodo(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteSkill,
    edit,
    update
  };