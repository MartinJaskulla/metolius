import React, {useContext} from "react"
import Context from "../Context";

const SelectPage = () => {
    const {state, dispatch} = useContext(Context)

    console.log(state)
    return (
        <>
            Select
        </>
    )
}

export default SelectPage