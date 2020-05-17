import React from 'react'
import { ArticlesPageTemplate } from '../../templates/articles-page'

interface ArticlesPagePreviewProps {
    entry: {
        getIn: Function,
    },
    widgetFor: Function
}

export const ArticlesPagePreview: React.FunctionComponent<ArticlesPagePreviewProps> = ({ entry, widgetFor }) => (
    <ArticlesPageTemplate
        title={entry.getIn(['data', 'title'])}
        articlesList={widgetFor('articlesList')}
    />
)
