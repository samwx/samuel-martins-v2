import styled from 'styled-components';
import { colors } from './variables/colors';
import { zindex } from './variables/z-index';

export const BlogListContainer = styled.div`
    background: ${colors.white};
    padding: 40px;
    margin: 0 auto;
    margin-top: -50px;
    position: relative;
    z-index: ${zindex[2]};
    border-radius: 10px;
    width: 70%;

    h2 {
        font-size: 36px;
        margin-bottom: 30px;
    }
`