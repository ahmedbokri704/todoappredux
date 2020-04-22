export const addTodo = (payload)=> {
    return {
        type: "ADD_TODO",
        payload
    }
}

export const deleteTodo = (payload)=> {
    return {
        type: "DELETE_TODO",
        payload
    }
}

export const completeTodo = (payload)=> {
    return{
        type:"COMPLETE_TODO",
        payload
    }
}

export const editTodo = (payload)=> {
    return {
        type:"EDIT_TODO",
        payload
    }
}

export const saveTodo = (payload)=> {
    return {
        type:"SAVE_TODO",
        payload
    }
}