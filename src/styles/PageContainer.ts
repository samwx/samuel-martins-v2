import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const PageContainer = styled.section`
    background: ${colors.white};
    padding: 40px 50px;
    margin-bottom: 30px;
    border-radius: 10px;

    .featured-thumbnail {
        margin: 20px 0;
    }

    .post-title {
        font-size: 36px;
        font-weight: ${fonts.weights.bold};

        a {
            color: ${colors.primaryBlue};

            &:hover {
                color: ${colors.secondaryBlue};
                text-decoration: none;
            }
        }
    }
`