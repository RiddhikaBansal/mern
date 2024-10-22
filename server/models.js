const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    github: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
