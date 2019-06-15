const express = require('express');
const Projects = require('./data/helpers/projectModel.js');
const router = express.Router();

router.use(express.json());


router.get('/', async (req, res) => {
    try {
      const projects = await Projects.get(req.query);
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the projects',
      });
    }
  });
  


module.export = router