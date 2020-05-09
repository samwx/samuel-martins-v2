import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const MainNavigation = styled.nav`
    background: ${colors.primaryBlue};
    font-size: 18px;
    padding: 25px;

    figure {
        color: ${colors.white};
        width: 50%;

        a {
            padding: 0;
            display: flex;
            align-items: center;

            &:hover {
                background: transparent;
            }
        }

        h3 {
            font-size: 18px;
            font-weight: ${fonts.weights.regular};
            margin: 0;
        }

        img {
            width: 35px;
            height: 35px;
            margin-right: 20px;
        }
    }

    nav {
        width: 50%;
    }

    ul {
        list-style: none;
    }

    a {
        color: ${colors.white};
        padding: 5px 12px;
        border-radius: 10px;
        display: inline-block;

        &:hover {
            background: ${colors.secondaryBlue};
            text-decoration: none;
        }
    }
`