const { request } = require('express');
const express = require('express');
const member = require ('../models/contact')
const route = express.Router ();
const {addContact,contacts,removedContact,updateContact, contactsList, contactsID } = require ('../controllers/contactControllers')

// methode post // request.body

 route.post ('/',addContact)

 // methode get // get doesn't have a body
 route.get ('/' , contacts)

  // methode delete // uses req param 
  route.delete ('/:ID',removedContact)

 // methode put 
 route.put('/:ID',updateContact)

 // methode getOne // get doesn't have a body
 route.get('/findOne' , contactsList)


 // methode getOneByID // get doesn't have a body
 route.get('/:ID' , contactsID  )

 module.exports = route;