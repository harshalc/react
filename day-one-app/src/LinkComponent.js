import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends Component {
    render() {
        const linkStyle = {
            color: this.props.color,
        }
        return (
            <li>
            <a href={this.props.apiUrl} style={linkStyle}>{this.props.urlName}</a>
            </li>
        )
    }
}
LinkComponent.propTypes = {
    apiUrl : PropTypes.string,
    urlName : PropTypes.string,
    color : PropTypes.string,
}

export default LinkComponent;