import React from 'react';

export default class CardNew extends React.Component {
    render() {
        return (
            <div className="container">
                <p>{this.props.job_title}</p>
                <p>{this.props.company}</p>
                <p>{this.props.location}</p>
            </div>
        );
    }
}