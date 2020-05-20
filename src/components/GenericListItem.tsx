import React from 'react';
import { GenericListItemContent } from '../styles/GenericListItemContent';
import { HTMLContent } from '../components/Content';
import remark from 'remark';

const remarkHTML = require('remark-html');

const toHTML = value =>
    remark()
        .use(remarkHTML)
        .processSync(value)
        .toString();
export interface GenericListItemProps {
    itemTitle: string;
    itemDescription: string;
    itemLink: string;
}

export const GenericListItem: React.FunctionComponent<GenericListItemProps> = ({
    itemTitle,
    itemDescription,
    itemLink
}) => (
    <GenericListItemContent>
        <h2>{itemTitle}</h2>
        <div className="generic-item-description">
            <HTMLContent content={toHTML(itemDescription)} />
        </div>
        <a href={itemLink} className="generic-item-link" target="_blank">
            Ver apresentação →
        </a>
    </GenericListItemContent>
);
