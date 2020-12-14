const router = require("express").Router();
const Cult = require("../../model/Cult");

router.post("/newCult", async (req, res) => {
  const cult = new Cult({
    clientId: req.body.clientId,
    legume: req.body.legume,
    price: req.body.price,
    growLength: req.body.growLength,
    fenetre: req.body.fenetre,
    parcelle: req.body.parcelle,
    rowNum: req.body.rowNum,
    rowLength: req.body.rowLength,
    rowWidth: req.body.rowWidth,
    spaceBet: req.body.spaceBet,
    unit: req.body.unit,
    variete: req.body.variete,
    color: req.body.color,
    start: req.body.start,
  });

  try {
    const saveCult = cult.save();
    res.send(
      `Nous avons enregitre la plantation de ${cult.legume} a bien été créer dans al parcelle ${cult.parcelle}`
    );
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/Cult", (req, res) => {
  Cult.find(function (err, cult) {
    if (err) {
      res.send(err);
    }
    res.json(cult);
  });
});

router.delete("/cult/delete", async (req, res) => {
  try {
    const removeCult = await Cult.deleteOne({ _id: req.body.id });
    res.send("Element supprimé");
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

module.exports = router;
