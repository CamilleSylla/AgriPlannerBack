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

module.exports = router;