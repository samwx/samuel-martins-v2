import styled from 'styled-components';
import { InlineMenu } from './InlineMenu';
import { colors } from './variables/colors';
import { fonts } from './variables/fonts';

export const HomeNavigation = styled(InlineMenu)`
    margin-bottom: 40px;

    a {
        color: ${colors.white};
        font-family: ${fonts.family.secondary};
        font-size: 18px;
    }
`;
