import styled from 'styled-components';
import { colors } from './variables/colors';
import { zindex } from './variables/z-index';
import { device } from './variables/device';

export const BlogListContainer = styled.div`
    background: ${colors.white};
    padding: 40px;
    margin: 0 auto;
    margin-top: -50px;
    position: relative;
    z-index: ${zindex[2]};
    border-radius: 10px;
    width: 70%;

    @media ${device.small} {
        width: 95%;
    }

    h2 {
        font-size: 36px;
        margin-bottom: 30px;
    }

    h3.post-title {
        @media ${device.small} {
            font-size: 24px;
            line-height: 1;
        }
    }
`;
