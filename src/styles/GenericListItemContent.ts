import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const GenericListItemContent = styled.article`
    background: ${colors.white};
    padding: 30px 40px;
    border-radius: 10px;
    margin-bottom: 50px;

    h2 {
        color: ${colors.primaryBlue};
    }

    .generic-item-description {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid ${colors.softGray};
    }

    .generic-item-link {
        color: ${colors.primaryRed};
        font-weight: ${fonts.weights.bold};
        font-size: 18px;
    }
`