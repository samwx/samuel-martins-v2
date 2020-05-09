import React, { useState, ReactElement } from 'react';
import {
    InstantSearch,
    SearchBox,
    Hits,
    Configure,
    Stats,
    PoweredBy
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { TagsList } from './TagsList';
import { PageContainer } from '../styles/PageContainer';
import { PostItem } from './PostItem';
import qs from 'qs';
import { SearchBarContainer } from '../styles/SearchBarContainer';
import { StatsContainer } from '../styles/StatsContainer';

interface SearchableProps {
    callbackContent: ReactElement;
}

const Hit = ({ hit }) => {
    const postItemProps = {
        fields: {
            slug: hit.fields.slug,
            readingTime: hit.fields.readingTime
        },
        frontmatter: {
            title: hit.title,
            date: hit.date,
            description: hit.description
        }
    };

    return (
        <PostItem post={postItemProps} showImage={true} showReadTime={true} />
    );
};

export const Searchable: React.FunctionComponent<SearchableProps> = ({
    callbackContent
}) => {
    const [searchState, setSearchState] = useState({ query: '' });
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );
    const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={indexName}
            onSearchStateChange={setSearchState}
        >
            <Configure hitsPerPage={100} />
            <SearchBarContainer>
                <SearchBox
                    translations={{
                        placeholder: 'Buscar...'
                    }}
                />
            </SearchBarContainer>
            <TagsList />
            {searchState && searchState.query ? (
                <>
                    <StatsContainer>
                        <Stats
                            translations={{
                                stats(count) {
                                    return `${count} resultado${
                                        count > 1 ? 's' : ''
                                    } encontrados`;
                                }
                            }}
                        />
                    </StatsContainer>
                    <PageContainer>
                        <Hits hitComponent={Hit} />
                        <PoweredBy />
                    </PageContainer>
                </>
            ) : (
                callbackContent
            )}
        </InstantSearch>
    );
};
