const router = require('express').Router();
const Parcelle = require('../../model/parcelle');

router.post('/newParc', async (req, res) => {
    const parc = new Parcelle({

        clientId : req.body.clientId,
        name: req.body.name,
        length: req.body.length,
        width: req.body.width,
        surface: req.body.surface

    });

    try {
        const saveParc = parc.save();
        res.send(`La parcelle ${parc.name} a bien été créer`);
    }catch(err){
        res.status(400).send(err)
    }
});
router.get('/Parcelle', (req,res) => {
    Parcelle.find(function(err, par){
        if(err){
            res.send(err)
        }
        res.json(par)
    })
})
router.delete("/parcelle/delete", async (req, res) => {
    try {
      const removeParcelle = await Parcelle.deleteOne({ _id: req.body.id });
      res.send("Element supprimé");
    } catch (err) {
      if (err) {
        res.status(400).send(err);
      }
    }
  });

  router.patch("/parcelle/update", async (req, res) => {
    try {
      const updatedParcelle = await Parcelle.updateOne(
        { _id: req.body.id },
        { $set: req.body }
      );
      res.json(updatedParcelle);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;