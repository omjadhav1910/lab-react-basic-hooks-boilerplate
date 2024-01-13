import { useEffect, useState } from 'react'

function UseEffect(){

    const[ state,setState ] = useState(true)
    const [ themeStyle,setThemeStyle ] = useState({
        backgroundColor: "black",
        color: "grey",
        padding: "2rem",
        margin: "2rem",
    })

    function handleClick() {
        setState(!state)
    }

    useEffect( () => (
        setThemeStyle({
            backgroundColor: state? "black" : "grey",
            color: state? "grey" : "black",
            padding: "2rem",
            margin: "2rem",})
    ), [state])


    return(
        <>
            <button onClick = {handleClick}>Toggle for useEffect</button>
            <div style={themeStyle}>This is made by using useEffect</div>
        </>
    )
}

export default UseEffect