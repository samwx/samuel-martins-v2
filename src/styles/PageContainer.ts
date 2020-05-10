import styled from 'styled-components';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const PageContainer = styled.section`
    background: ${colors.white};
    padding: 40px 50px;
    margin-bottom: 30px;
    border-radius: 10px;

    .ais-PoweredBy {
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        .ais-PoweredBy-link {
            display: flex;
        }

        .ais-PoweredBy-logo {
            width: 60px;
            margin-left: 10px;
        }
    }

    .featured-thumbnail {
        margin: 20px 0;
    }
`