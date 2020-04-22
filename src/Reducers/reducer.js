const initialState = {
    todolist: [{ id: 1, text: "Todo 1", isCompleted: false, edit: false },
    { id: 2, text: "Todo 2", isCompleted: false, edit: false },
    { id: 3, text: "Todo 3", isCompleted: false, edit: false }
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "ADD_TODO":
    return {
        todolist: [...state.todolist,action.payload]
    }
    case "DELETE_TODO":
            return {
                todolist: state.todolist.filter((element) => (element.id !== action.payload))
            }
        case "COMPLETE_TODO":
            return {
                todolist: state.todolist.map((element) => 
                (element.id === action.payload) ? 
                { ...element, iscompleted: !element.iscompleted } : element)
            }
    
        case "EDIT_TODO":
        return {
            todolist: state.todolist.map((element) => (element.id === action.payload) ?
                ({ ...element, edit: !element.edit })
                : (element)

            )
        };
            case "SAVE_TODO":
        return {
            todolist: state.todolist.map((element) =>  (element.id === action.payload.id) ?
                ({ ...element, text: action.payload.text, edit: !element.edit })
                : (element)

            )
        };
    default: return state;
    }
    }