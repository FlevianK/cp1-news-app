import React from 'react';
import Articles from './Articles.jsx';
import ArticlesTable from './ArticlesTable.jsx'

class ToggleableArticlesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            // clickedUrl: ''
        };
        // this.handleArticlesOpen = this.handleArticlesOpen.bind(this);
        // this.handleArticlesTableOpen = this.handleArticlesTableOpen.bind(this);
        // this.getUrl = this.getUrl.bind(this);
    }

    // handleArticlesOpen() {
    //     this.setState({
    //         isOpen: false
    //     });
    // }
    // handleArticlesTableOpen() {
    //     this.setState({
    //         isOpen: true
    //     });
    // }
    // getUrl(rowUrl) {
    //     this.setState({
    //         clickedUrl: rowUrl,
    //         isOpen: false
    //     });
    // }
    render() {
        // if (this.state.isOpen) {
        return (
            <div>
                <ArticlesTable
                    articlesTableHeader="Articles List"
                    sourceName={this.props.sourceName}
                    sourceId={this.props.sourceId}
                    handleArticlesOpen={this.handleArticlesOpen}
                    isOpen={this.state.isOpen}
                />
            </div>
        );
        /*} else {
            return (
                <div>
                    <Articles
                        articlesHeader="Articles"
                        isOpen={this.state.isOpen}
                        handleArticlesTableOpen={this.handleArticlesTableOpen}
                        sourceId={this.props.sourceId}
                    />
                </div>
            );*/
        // }
    }
}

export default ToggleableArticlesComponent;