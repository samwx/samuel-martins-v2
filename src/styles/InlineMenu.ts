import styled from 'styled-components';

export const InlineMenu = styled.nav`
    text-align: center;

    ul {
        margin: 0;
        list-style: none;

        li {
            display: inline-block;
            margin-right: 40px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;
