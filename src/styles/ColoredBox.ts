import styled from "styled-components";
import { colors } from "./variables/colors";

export const ColoredBox = styled.div<{ background: string, icon: string }>`
    background: ${props => props.background || colors.lightGray};
    ${props => props.icon
        ? `background-image: url(${props.icon});
           background-position: 105% 120%;
           background-repeat: no-repeat;
           background-size: 160px;`
        : ''}
    color: ${colors.white};
    padding: 20px;
    width: 290px;
    height: 215px;
    font-size: 18px;

    &:hover { box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25); }

    h3 {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;