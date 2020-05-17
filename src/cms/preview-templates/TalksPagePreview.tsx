import React from 'react'
import { TalksPageTemplate } from '../../templates/talks-page'

interface TalksPagePreviewProps {
    entry: {
        getIn: Function,
    },
    widgetFor: Function
}

export const TalksPagePreview: React.FunctionComponent<TalksPagePreviewProps> = ({ entry, widgetFor }) => (
    <TalksPageTemplate
        title={entry.getIn(['data', 'title'])}
        talksList={widgetFor('talksList')}
    />
)
