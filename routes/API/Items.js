const express = require('express');
const router = express.Router();

//bring in model//
const Item = require('../../models/Items');

// @route GET api/items
// @desc GET All items
// @access public

router.get('/items', (req,res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create a Poste
// @access public

router.post('/items', (req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    //.save() creates a promise//
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access public

router.delete('/items/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true}))
        )
        // const { items } = this.state;
        // return(
        //     <Container>
        //         <Button
        //         color="dark"
        //         style={{marginBottom: "2rem" }}
        //         onClick={() => {
        //             const name = prompt('enter item');
        //             if(name) {
        //                 this.setState(state => ({
        //                     items: [...state.items, { id: uuid(), name }]
        //                 }))
        //             }
        //         }}>Add Item</Button>
        //     </Container>
        // )
})


module.exports = router;