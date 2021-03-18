const express = require('express');
const router = express.Router();
const path = require('path')

const User = require('../models/users')

router.get('/', async(req, res) => {
    const users = await User.find();
    res.json(users)
})  

// Mostrar un solo usuario
router.get('/:id', async (req, res) =>{
   const user = await User.findById(req.params.id);
   res.json(user)
})

// Ingresar un usuario
router.post('/', async(req, res) => {
    const {name, surname} = req.body;
    const user = new User({name, surname});
    await user.save();
    res.json({status: 'user logged'});
})

//Eliminar Usuario por Id

router.delete('/:id', async(req, res) => {
    const userDelete = await User.findByIdAndDelete(req.params.id)
    res.json(`${userDelete} se elimino satisfactoriamente`)
})

//Actualizar User
router.put('/:id', async(req, res) =>{
    const {name, surname} = req.body;
    const newUser = {name, surname};
    await User.findByIdAndUpdate(req.params.id, newUser)
    res.json('Se actualiszo correctamente')
})

module.exports = router; 