const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new project
router.post('/', async (req, res) => {
    const { title, description, link, github } = req.body;
    const newProject = new Project({ title, description, link, github });

    try {
        const savedProject = await newProject.save();
        res.json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
