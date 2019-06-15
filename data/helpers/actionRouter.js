const express = require('express');
const Actions = require('./data/helpers/actionModel.js');
const router = express.Router();

router.use(express.json());


router.get("/", async (req, res) => {
    try {
      const actions = await Actions.get(req.query);
      res.status(200).json(actions);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error getting the actions'});
    }
  });

  router.post("/", async (req,res)=> {
      try{
          const newAction = await Actions.insert(req.body);
          res.status(201).json(newAction)
      } catch (error) {
          res.status(500).json({essage: "Error posting actions"});
      }
  });

  router.put("/:id", async, (req,res) => {
      try{
          const updateAction = await Actions.update(req.params.id, req.body);
          if(updateAction) {
              res.status(200).json(updateAction)
          } else {
              res.status(404).json({ message:"Action cannot be found"});
          }
        } catch (error) {
            res.status(500).json({message:"Error updating action"});
        }
  });

  router.delete("/:id", async, (req,res) => {
      try{
          const deleteAction = await Actions.remove(req.params.id)
            if(deleteAction>0){
                res.status(200).json({message:"Action deleted"})
            }
 else {
     res.status(404).json({message:"Error deleting action"})
 }  
   } catch (error) {
       res.status(500).json({message:"Error removing action"})
   }
  })
  


module.export = router