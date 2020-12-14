const router = require('express').Router();
const Legume = require('../../model/legume');

router.post('/newLegume', async (req, res) => {
    const legu = new Legume({
        clientId : req.body.clientId,
        name: req.body.name,
        price: req.body.price,
        unit: req.body.unit,
        growLength: req.body.growLength,
        variete: req.body.variete,
        fenetre: req.body.fenetre,
        color: req.body.color
    });

    try {
        const saveLegu = legu.save();
        res.send(`Votre produit ${legu.name} a bien été créer`);
    }catch(err){
        res.status(400).send(err)
    }
});
router.get('/Legume', (req,res) => {
    Legume.find(function(err, leg){
        if(err){
            res.send(err)
        }
        res.json(leg)
    })
})
router.delete("/legume/delete", async (req, res) => {
    try {
      const removeLegume = await Legume.deleteOne({ _id: req.body.id });
      res.send("Element supprimé");
    } catch (err) {
      if (err) {
        res.status(400).send(err);
      }
    }
  });

module.exports = router;