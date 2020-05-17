import React from 'react';
import { GenericListItemContent } from '../styles/GenericListItemContent';

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
        <div className="generic-item-description">{itemDescription}</div>
        <a href={itemLink} className="generic-item-link" target="_blank">Ver apresentação →</a>
    </GenericListItemContent>
);
