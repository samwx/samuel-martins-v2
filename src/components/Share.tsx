import React from 'react';
import { InlineList } from '../styles/InlineList';
import { ShareContainer } from '../styles/ShareContainer';

export const Share: React.FunctionComponent<{ text: string, link: string }> = ({ text, link }) => (
    <ShareContainer>
        <span>Compartilhe esse artigo</span>
        <InlineList>
            <li>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
                >
                    <img src="/img/linkedin.svg" />
                </a>
            </li>
            <li>
                <a href={`https://twitter.com/intent/tweet?text=${text} - ${link}`}>
                    <img src="/img/twitter.svg" />
                </a>
            </li>
        </InlineList>
    </ShareContainer>
);
