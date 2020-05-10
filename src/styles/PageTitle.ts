import styled from 'styled-components';
import { fonts } from './variables/fonts';
import { colors } from './variables/colors';

export const PageTitle = styled.div`
    .post-title {
        font-size: 36px;
        font-weight: ${fonts.weights.bold};
        color: ${colors.primaryBlue};
        line-height: 48px;

        a {
            color: ${colors.primaryBlue};

            &:hover {
                color: ${colors.secondaryBlue};
                text-decoration: none;
            }
        }
    }
`;
