const reducer = (state, { type }) => {
    switch (type) {
        case "LOG_OUT":
            return { }
        default:
            return state
    }
}

export default reducer

// localStorage.jwt = jwt
// localStorage.removeItem("jwt")