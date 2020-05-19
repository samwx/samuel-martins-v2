import styled from 'styled-components';
import { device } from './variables/device';

export const Container = styled.div<{ display?: string }>`
    margin: 0 auto;
    width: 900px;
    ${({ display }) => display ? `display: ${display};` : ''}

    @media ${device.small} {
        width: 100%;
    }

    @media ${device.medium} {
        width: 720px;
    }

    @media ${device.large} {
        width: 720px;
    }

`;
