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

module.exports = router;