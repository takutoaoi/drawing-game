import React from "react";
import {QuestionMark} from "../Atoms/QuestionMark";
import styled, {keyframes} from "styled-components";

const OPACITY_MULTIPLIER = 0.3;
const SIZE_MULTIPLIER = 3;
const TIMING_OFFSET = 3;

export const QuestionMarkBackGround = () => {
    return (
        <React.Fragment>
            {[...new Array(50)].map((_, index) => {
                return (
                    <QuestionMarkWrapper
                        top={Math.random() * 100} // as vh
                        left={Math.random() * 100} // as vw
                        opacity={Math.random() * OPACITY_MULTIPLIER}
                        timing={Math.random() + TIMING_OFFSET}
                        key={index}
                    >
                        <QuestionMark
                            size={Math.random() * SIZE_MULTIPLIER}
                        />
                    </QuestionMarkWrapper>)
            })
            }
        </React.Fragment>
    )
}

interface QuestionMarkWrapperProps {
    top: number;
    left: number;
    opacity: number;
    timing: number;
}

const rotate = keyframes`
  0% {
    transform: rotate(-15deg);
  }

  50% {
    transform: rotate(15deg);
  }
  
  100%{
  transform: rotate(-15deg);
  }
`;

const QuestionMarkWrapper = styled.div`
position: fixed;
top:${(props: QuestionMarkWrapperProps) => props.top + "vh"};
left: ${(props: QuestionMarkWrapperProps) => props.left + "vw"};
opacity: ${(props: QuestionMarkWrapperProps) => props.opacity};
animation: ${rotate} ${(props: QuestionMarkWrapperProps) => props.timing}s ease-in-out infinite;
`
