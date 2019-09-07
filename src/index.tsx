import * as ReactDOM from 'react-dom'
import {Grommet} from 'grommet'
import * as React from "react";
import {StartPage} from "./Pages/StartPage"
import {Reset} from 'styled-reset'

const myTheme = {
    global: {
        font: {
            family: `"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro","游ゴシック Medium",YuGothic,YuGothicM,メイリオ,Meiryo,sans-serif`,
        },
        colors:{
            brand: '#95a5a6',
            focus: '#3498db'
        }
    },
};

ReactDOM.render(
    <React.Fragment>
        <Reset/>
        <Grommet theme={myTheme}>
            <StartPage/>
        </Grommet>
    </React.Fragment>,
    document.getElementById('root')
)
