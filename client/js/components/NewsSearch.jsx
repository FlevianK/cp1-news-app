import React from 'react';
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['.name', 'subject', 'dest.name']

class NewsSearchComponent extends React.Component {
    getInitialState() {
        return { searchTerm: '' }
    }
    render() {
        return (
            <div>
                <SearchInput className="search-input" onChange={this.searchUpdated} />
                {filteredSources.map(source => {
                    source.id = source.id,
                        source.name = source.name
                })}
            </div>
        );

    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
}

export default NewsSearchComponent;