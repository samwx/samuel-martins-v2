import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

interface IndexPagePreviewProps {
    entry: {
        getIn: (data: any) => any;
    };
    getAsset: () => any;
}

export const IndexPagePreview: React.FunctionComponent<IndexPagePreviewProps> = ({
    entry
}) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return <IndexPageTemplate {...data} />;
    } else {
        return <div>Loading...</div>;
    }
};
