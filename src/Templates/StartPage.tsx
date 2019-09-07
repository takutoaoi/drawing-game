import React from 'react';
import {Hero} from '../Organisms/Hero'
import {QuestionMarkBackGround} from "../Molecules/QuestionMarkBackGround";

export const StartPageTemplate = () => {
    return (
        <React.Fragment>
            <Hero/>
            <QuestionMarkBackGround/>
        </React.Fragment>
        )
}
