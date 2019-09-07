import React from 'react';
import {Help} from 'grommet-icons';
import styled, {keyframes} from "styled-components";
export const QuestionMark = (props: { size: number }) => {
    return (<Help style={{transform:`scale(${props.size})`}}/>)
}
