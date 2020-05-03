import { createGlobalStyle } from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${colors.darkenWhite};
        color: ${colors.primaryGray};
        font-family: ${fonts.family.primary};
        font-weigth: ${fonts.weights.regular};
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.family.secondary};
    }
`;
