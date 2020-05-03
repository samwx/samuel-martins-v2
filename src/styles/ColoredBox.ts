import styled from "styled-components";
import { colors } from "./variables/colors";

export const ColoredBox = styled.div<{ background: string }>`
    background: ${props => props.background};
    color: ${colors.white};
    padding: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    width: 100%;
`;