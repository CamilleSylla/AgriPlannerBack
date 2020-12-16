const router = require('express').Router();
const Stock = require('../../model/Stock');

router.post('/newStock', async (req, res) => {
    const stock = new Stock({
        clientId : req.body.clientId,
        produit : req.body.produit,
        variete : req.body.variete,
        fournisseur : req.body.fournisseur,
        quantity: req.body.quantity,
        unit: req.body.unit,
        planType: req.body.planType

    });

    try {
        const saveStock = stock.save();
        res.send(`Vous venez d'ajouter un stock  de ${stock.name + " " +stock.variete} a la base`);
    }catch(err){
        res.status(400).send(err)
    }
});
router.get('/stock', (req,res) => {
    Stock.find(function(err, par){
        if(err){
            res.send(err)
        }
        res.json(par)
    })
})
router.delete("/stock/delete", async (req, res) => {
    try {
      const removeStock = await Stock.deleteOne({ _id: req.body.id });
      res.send("Element supprimé");
    } catch (err) {
      if (err) {
        res.status(400).send(err);
      }
    }
  });

  router.patch("/stock/update", async (req, res) => {
    try {
      const updatedStock = await Stock.updateOne(
        { _id: req.body.id },
        { $set: req.body }
      );
      res.json(updatedStock);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;