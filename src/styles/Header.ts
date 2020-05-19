import styled from 'styled-components';
import { colors } from './variables/colors';
import { device } from './variables/device';

const HeaderBg = require('../../static/img/header-bg-rectangle.png');
export const Header = styled.header`
    background: ${colors.primaryBlue} url(${HeaderBg}) no-repeat center right;
    background-size: contain;
    color: ${colors.white};
    padding: 50px 0 100px 0;

    @media ${device.small} {
        background: ${colors.primaryBlue};
    }

    @media ${device.large} {
        background: ${colors.primaryBlue};
    }

    .intro-container {
        @media ${device.small} {
            flex-wrap: wrap;
        }

        @media ${device.large} {
            flex-wrap: wrap;
        }

        .home-profile {
            width: 30%;

            figure {
                img {
                    width: 150px;
                }
            }

            @media ${device.small} {
                width: 100%;
            }

            @media ${device.large} {
                width: 100%;
            }
        }
    }
`;
