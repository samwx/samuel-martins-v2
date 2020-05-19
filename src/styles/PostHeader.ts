import styled from 'styled-components';
import { device } from './variables/device';

export const PostHeader = styled.header`
    margin: 60px 0 25px 0;

    @media ${device.small} {
        padding: 0 30px;
    }

    h1 {
        margin-bottom: 20px;
    }

    .post-meta {
        font-size: 14px;
    }
`;
