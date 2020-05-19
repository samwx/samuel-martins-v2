import styled from 'styled-components';
import { device } from './variables/device';
import { ColoredBox } from './ColoredBox';

export const HomeBoxes = styled.div`
    margin: 0 auto;
    margin-top: 65px;
    margin-bottom: 65px;
    display: flex;
    justify-content: space-between;
    width: 70%;

    @media ${device.small} {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        ${ColoredBox} {
            margin-bottom: 40px;
        }
    }

    a {
        &:hover { text-decoration: none; }
    }
`;
