import styled from 'styled-components';
import { colors } from './variables/colors';

export const TagsContainer = styled.section`
    font-size: 14px;
    text-transform: capitalize;
    margin: 30px 0;

    ul {
        list-style: none;
        text-align: center;

        li {
            display: inline-block;
            margin-right: 10px;

            a {
                color: ${colors.secondaryGray};
                padding: 2px 10px;
                border-radius: 10px;
                border: 1px solid ${colors.softGray};

                &:hover {
                    text-decoration: none;
                    background: ${colors.secondaryGray};
                    border: 1px solid ${colors.secondaryGray};
                    color: ${colors.white};
                }
            }
        }
    }
`;