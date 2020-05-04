import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from './Navigation';
import { Footer } from '../components/Footer';
import { GlobalStyles } from '../styles/GlobalStyles';
import './all.scss';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

export const Layout: React.FunctionComponent<{
    children: React.ReactNode;
    hideHeader?: boolean;
}> = ({ children, hideHeader }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />

                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix('/')}img/og-image.jpg`}
                />
            </Helmet>
            <GlobalStyles />
            {!hideHeader && <Navigation />}
            <div>{children}</div>
            <Footer>
                © Copyright {new Date().getFullYear()}. Todos os direitos reservados
            </Footer>
        </div>
    );
};
