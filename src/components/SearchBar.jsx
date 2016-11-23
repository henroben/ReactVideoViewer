import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    onInputChange(term) {
        this.setState({
            term
        });
        this.props.onSearchTermChanged(term);
    }
    render() {
        return(
            <div className="search-bar">
                <input className="form-control" placeholder="Search for video" onChange={event => this.onInputChange(event.target.value)} value={this.state.term} />
            </div>
        );
    }
}

export default SearchBar;