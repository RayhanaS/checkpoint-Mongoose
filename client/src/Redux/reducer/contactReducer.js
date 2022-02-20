import { GET_CONTACT,GET_CONTACTS } from "../types/contactTypes"; 

const iniState = { 
     contacts:[],
     contact:{}, 
}  

const contactReducer = (state=iniState,action) => { 
    switch (action.type) {         
//get every contact in database         
    case GET_CONTACTS:          
        return { 
            ...state,
            contacts:action.payload 
        }
              
  // get only one contact in database      
     case GET_CONTACT:          
      return { ...state,
      contacts:action.payload 
  }
  default :return state }}
  