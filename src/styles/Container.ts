import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        max-width: 100%;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        max-width: 720px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        max-width: 900px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        max-width: 900px;
    }

    // Extra extra large devices (large desktops, 1400px and up)
    @media (min-width: 1400px) {
        max-width: 900px;
    }

`;
