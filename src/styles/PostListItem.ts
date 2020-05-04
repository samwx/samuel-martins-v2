import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const PostListItem = styled.article`
    margin-bottom: 35px;

    .post-meta {
        font-size: 14px;
        margin-top: 15px;
    }

    .post-item-description {
        font-style: italic;
        color: ${colors.lightGray};
        font-size: 14px;
    }

    header {
        h3 {
            font-size: 24px;
            font-weight: ${fonts.weights.regular};

            a {
                color: ${colors.primaryGray};

                &:hover {
                    color: ${colors.primaryBlue};
                }
            }
        }
    }
`;
