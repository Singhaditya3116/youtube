import {createSlice} from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./config";

const chatSlice = createSlice({
    name:"chat" ,
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage : (state,action) => {
            state.messages.splice(LIVE_CHAT_OFFSET,1);
            state.messages.unshift(action.payload);
        },

        // appendMessage : (state,action) => {
        //     state.messages.unshift(action.payload);
        // }
    }
})


export const {addMessage} = chatSlice.actions; 
export default chatSlice.reducer;