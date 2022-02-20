const express = require('express');

const member = require ('../models/contact')
exports.addedContact= async (req, res) => {
    try {
       const addedContact = new member (req.body)
       await addedContact.save ()
        res.status (200). send ({msg :'successfully added contact' , addedContact })
    } catch (error) {
        res.status (500).send ({msg: 'error creating contact' , error})
    }
}


exports.contacts = async (req, res) => {
    try {
         const contacts = await member.find()
        res.status (200). send ({msg :'successfully found contact' , contacts })
        
    } catch (error) {
       res.status (500).send ({msg: 'list not found' , error})
        
    }}

    exports.removedContact = async(req, res) => {
        const {ID}= req.params
         try {
             const removedContact = await member.findByIdAndDelete (ID)
             
             res.status (200). send ({msg :'successfully removed contact' , removedContact })
         } catch (error) {
            res.status (500).send ({msg: 'contact cant be removed' , error})
             
         }
     }

     exports.updateContact = async (req, res) => {
        const {ID}= req.params
        try {
            const updateContact = await member.findByIdAndUpdate (ID,{$set:{...req.body}})
            res.status (200). send ({msg :'successfully updated contact' , updateContact })
        } catch (error) {
           res.status (500).send ({msg: 'contact cant be updated' , error})
            
        }
    }

    exports.contactsList = async (req, res) => {
        const {ID} = req.params
       try {
            const contacts = await member.findOne({...req.body}) 
           res.status (200). send ({msg :'successfully found contact' , contacts })
           
       } catch (error) {
          res.status (500).send ({msg: 'list not found' , error})
            
       }}


       exports.contactsID = async (req, res) => {
        const {ID} = req.params
       try {
            const contacts = await member.findOne({_id: ID})  
           res.status (200). send ({msg :'successfully found contact' , contacts })
           
       } catch (error) {
          res.status (500).send ({msg: 'list not found' , error})
            
       }
    }
