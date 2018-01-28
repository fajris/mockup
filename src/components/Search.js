import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleTextSearch = this.handleTextSearch.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        console.log(this.props);
    }

    handleTextSearch(e) {
        console.log(e);
    }

    handleCheckBox(e) {
        console.log(this.props.check);
    }

    render() {
        return (
            <form>
                <p><input type="text" value="text" onChange={this.handleTextSearch} /></p>
                <p><input type="checkbox" checked={this.props.check} id="check-box" onChange={this.handleCheckBox} />
                    <label htmlFor="check-box">Only show products in stock</label></p>
            </form>
        );
    }
}

export default Search;