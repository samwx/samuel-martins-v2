import styled from 'styled-components';
import { fonts } from './variables/fonts';

export const ShareContainer = styled.div`
    display: flex;
    align-items: center;
    line-height: 0;
    margin-bottom: 10px;

    li {
        margin-right: 5px;
    }

    span {
        margin-right: 15px;
        font-weight: ${fonts.weights.bold};
    }
`