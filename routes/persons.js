//Importando los módulos necesarios.
const express = require('express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');

    // Definiendo la ruta en que recibirá el objeto JSON.
    router.get('/persons', function(req, res, next) {
        Person.find(function (err, persons) {
        if (err) return next (err);
        res.json(persons)
        });
    });

// Exportando el módulo.
module.exports = router; 