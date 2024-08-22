import { createSlice } from "@reduxjs/toolkit";

// to initialize the file as dlice we use method createSlice()
export const counterSlice = createSlice({
    // name has no importance
    name:'counterApp',
    // initial state creation
    initialState:{
        value:0
    },
    reducers:{
        // logic to update the value
        // actions are created inside the reducers
        increment:(state,data)=>{
            if(!data.payload){
                state.value+=1
            }
            else{
                state.value = state.value+data.payload;
            }
        },
        decrement:(state,data)=>{
            if(!data.payload){
                state.value-=1
            }
            else{
                state.value -= data.payload;
            }
        },
        reset:(state)=>{
            state.value=0;
        }
    }
});

export const {increment, decrement, reset}=counterSlice.actions;
export default counterSlice.reducer;