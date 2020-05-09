import styled from 'styled-components';
import { colors } from './variables/colors';

export const SearchBarContainer = styled.div`
    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        background: transparent;
        border: 0;
        order: 1;
        margin-right: 10px;
    }

    input {
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${colors.softGray};
        order: 2;

        &:focus {
            outline: 0;
            border-bottom-color: ${colors.secondaryGray};
        }
    }
`