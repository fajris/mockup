import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        const rows = [];
        this.props.data.forEach(data => {
            rows.push(data.name);
        });
        console.log(rows);
    }    

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.rows}
                </tbody>
            </table>
        );
    }
}

export default Table;