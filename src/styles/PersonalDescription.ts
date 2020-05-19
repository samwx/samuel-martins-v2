import styled from 'styled-components';
import { fonts } from './variables/fonts';
import { device } from './variables/device';

export const PersonalDescription = styled.div`
    width: 70%;

    @media ${device.small} {
        width: 100%;
        padding: 0 30px;
        text-align: center;
    }

    h1 {
        font-size: 72px;
        font-family: ${fonts.family.secondary};
        font-weight: ${fonts.weights.regular};
        margin-bottom: 30px;

        @media ${device.small} {
            font-size: 36px;
        }
    }
`