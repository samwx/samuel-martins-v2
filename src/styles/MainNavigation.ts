import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';
import { device } from './variables/device';
import { Container } from './Container';

export const MainNavigation = styled.nav`
    background: ${colors.primaryBlue};
    font-size: 18px;
    padding: 25px;

    ${Container} {
        display: flex;

        @media ${device.small} {
            flex-wrap: wrap;
        }
    }

    figure {
        color: ${colors.white};
        width: 50%;

        @media ${device.small} {
            width: 100%;
        }

        a {
            padding: 0;
            display: flex;
            align-items: center;

            &:hover {
                background: transparent;
            }

            @media ${device.small} {
                justify-content: center;
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

        @media ${device.small} {
            width: 100%;
        }
    }

    ul {
        list-style: none;

        @media ${device.small} {
            padding-left: 0;
            margin-top: 30px;
        }
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

        &.navbar-item-active {
            background: ${colors.secondaryBlue};
        }
    }
`;
