const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            return { 
                ...state,
                workouts: [...state.workouts, action.workout]
            }
        default:
            return state
    }
}

export default reducer

// localStorage.jwt = jwt
// localStorage.removeItem("jwt")