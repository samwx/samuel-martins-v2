import { createGlobalStyle } from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';
import { device } from './variables/device';

export const GlobalStyles = createGlobalStyle`
    :root {
        --grvsc-border-radius: 0px;
    }

    body {
        background: ${colors.darkenWhite};
        color: ${colors.primaryGray};
        font-family: ${fonts.family.primary};
        font-weight: ${fonts.weights.regular};
    }

    a {
        text-decoration: none;
        color: ${colors.primaryBlue};

        &:hover {
            text-decoration: underline;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.family.secondary};
    }


    .grvsc-container {
        margin: 0 -60px;

        @media ${device.small} {
            margin: 0 -30px;
        }
    }
`;
