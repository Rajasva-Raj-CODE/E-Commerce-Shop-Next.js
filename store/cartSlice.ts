import  { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id:number,
    title:string,
    price:number,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    }
}

interface CartState {
    items:CartItem[]
}

const initialState:CartState = {
    items:[]
}

