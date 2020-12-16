const router = require('express').Router();
const Preset = require('../../model/Preset');

router.post('/newPreset', async (req, res) => {
    const preset = new Preset({

        clientId : req.body.clientId,
        name : req.body.name,
        parcelle: req.body.parcelle,
        produit: req.body.produit,
        widthP: req.body.widthP,
        color: req.body.color,
        espR: req.body.espR,
        rangs: req.body.rangs,
        lengthP: req.body.lengthP,
        variete: req.body.variete

    });

    try {
        const savePreset = preset.save();
        res.send(`Le preset ${preset.name} a bien été créer`);
    }catch(err){
        res.status(400).send(err)
    }
});
router.get('/preset', (req,res) => {
    Preset.find(function(err, par){
        if(err){
            res.send(err)
        }
        res.json(par)
    })
})
router.delete("/preset/delete", async (req, res) => {
    try {
      const removePreset = await Preset.deleteOne({ _id: req.body.id });
      res.send("Element supprimé");
    } catch (err) {
      if (err) {
        res.status(400).send(err);
      }
    }
  });

  router.patch("/preset/update", async (req, res) => {
    try {
      const updatedPreset = await Preset.updateOne(
        { _id: req.body.id },
        { $set: req.body }
      );
      res.json(updatedParcelle);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;