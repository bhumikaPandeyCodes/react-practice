import { useReducer, useState } from "react";

export type Todo = {
    id: number,
    title: string,
    isDone: boolean
}


export const todoReducer = (state:Todo[], action:any)=>{
    if(action.type=="ADD"){
        return [...state, {id:Date.now(), title:action.payload, isDone:false}]
    }
    if(action.type=="DELETE"){
        state = state.filter((todo)=>action.id!=todo.id)
        return state
    }
    if(action.type=="EDIT"){
        console.log(action.payload.title)
        return state.map((todo)=>{
            return todo.id==action.id?
                 { ...todo, title: action.payload.title }:todo
            }
        )
    }
    // if(action.type=="EDIT"){
    // return state.map((todo)=>
    //     todo.id === action.id
    //         ? { ...todo, title: action.payload.title }
    //         : todo
    //     )
    // }
    if(action.type=="TOGGLE"){
        return state.map((todo)=> todo.id == action.id?{...todo, isDone:!todo.isDone}:todo)
    }
}
