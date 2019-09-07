import * as React from 'react';
import {Button, Box, ResponsiveContext} from "grommet";
import {Play, Help} from 'grommet-icons';
import styled from 'styled-components';


export const Hero = () => {
    return (
        <ResponsiveContext.Consumer>
            {size => (
                <Box animation={"fadeIn"}>
                    <Box margin={{top:"30vh"}} align={"center"}><Title>Drawing Game</Title></Box>
                    <Box margin={{horizontal:"1rem"}} justify={"center"} gap={"medium"} animation={"fadeIn"} direction={size === "small" ? "column" : "row"}>
                        <Button
                            icon={<Play/>}
                            label="遊ぶ"
                            onClick={() => {
                            }}
                        />
                        <Button
                            icon={<Help/>}
                            label="遊び方"
                            onClick={() => {
                            }}
                        />
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};

const Title = styled.h1`
font-family: 'Pacifico', cursive;
font-size:3rem;
height: 5rem;
`
