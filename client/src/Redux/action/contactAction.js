import axios from 'axios';
import {GET_CONTACTS ,GET_CONTACT  } from "../types/contactTypes";


export const getAllContact = () => async (dispatc) => {
    try {
        //connect to backend
        const res = await axios.get('./api/contacts')
        //reducer with thunk middelware
        dispatch ({
              type : 'GET_CONTACTS',
              payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
