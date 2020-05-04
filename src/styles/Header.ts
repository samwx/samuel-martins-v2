import styled from "styled-components";
import { colors } from "./variables/colors";

const HeaderBg = require('../../static/img/header-bg-rectangle.png');
export const Header = styled.header`
    background: ${colors.primaryBlue} url(${HeaderBg}) no-repeat center right;
    background-size: contain;
    color: ${colors.white};
    padding: 50px 0 100px 0;
`