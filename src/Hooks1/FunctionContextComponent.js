import React, { useContext } from "react";

import { ThemeContext } from "./useContext";

export default function FunctionContextComponent(){

    const darkTheme = useContext( ThemeContext)

    const themeStyle = {
        backgroundColor: darkTheme ? '#334' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return(
        <div>
            <h1 style={themeStyle}>Function Theme</h1>
        </div>
    )
}