import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AppStore from '../stores/AppStore.js';
import AppActions from '../actions/AppActions.js';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const options = [
    { value: "top", label: "Top" },
    { value: "latest", label: "Latest" },
    { value: "popular", label: "Popular" }
]

class ArticlesTableComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            sourceId: this.props.sourcesId,
            articles: [],
            sortBy: "top",
            clearable: false,
            isOpen: this.props.isOpen
        }
        this.onChange = this.onChange.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
    }
    componentDidMount() {
        AppActions.getArticles(this.props.sourceId, this.state.sortBy);
        AppStore.addChangeListener(this.onChange);
    }

    componentWillReceiveProps() {
        AppActions.getArticles(this.props.sourceId, this.state.sortBy);
        AppStore.addChangeListener(this.onChange);
    }
    onChange() {
        this.setState({ articles: AppStore.getArticles() });
    }
    handleOptions(event) {
        const sortBy = event.value;
        this.setState({
            sortBy: sortBy
        });
        AppActions.getArticles(this.props.sourceId, sortBy);
        AppStore.addChangeListener(this.onChange);
    }
    handleUrl(value, row, index) {
        // this.setState({ isOpen: false });
        // this.props.onOpenArticles(row.url);
        // this.props.clickedUrl(row.url);
        return "<a href=" + row.url + " target='_black'>" + value + "</a>";
    }


    render() {
        const { articles } = this.state;

        return (
            <div id="articles">
                <h1>{this.props.articlesTableHeader}</h1>
                <h2>{this.props.sourceName}</h2>
                <Select
                    options={options}
                    value={this.state.sortBy}
                    onChange={this.handleOptions}
                    clearable={this.state.clearable}
                ></Select>

                <BootstrapTable data={articles} striped={true} hover={true}>
                    <TableHeaderColumn dataField="author" isKey={true} dataSort={true}>Article author</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" dataSort={true}>Article Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="description" dataSort={true} dataFormat={this.handleUrl}>Article Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="publishedAt" dataSort={true}>Published At</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
}

export default ArticlesTableComponent;