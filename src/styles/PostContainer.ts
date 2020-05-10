import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const PostContainer = styled.section`
    background: ${colors.white};
    color: ${colors.primaryGray};
    padding: 60px;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 40px;

    p:not(:first-child) {
        margin: 25px 0;
    }

    a {
        color: ${colors.primaryRed};
        font-weight: ${fonts.weights.bold};

        &:hover {
            text-decoration: underline;
        }
    }
`;
