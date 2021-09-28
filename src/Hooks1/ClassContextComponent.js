import React, { Component } from 'react';
import { ThemeContext } from './useContext';

export default class ClassContextComponent extends Component{
    themeStyle(dark) {
        return{
            backgroundColor: dark ? '#334' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render(){
        return(
            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return <h1 style={this.themeStyle(darkTheme)}>Class Theme</h1>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}