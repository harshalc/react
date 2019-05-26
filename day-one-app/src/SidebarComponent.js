import React, { Component, Fragment } from 'react';
import LinkComponent from './LinkComponent';
import TagsContainer from './TagsContainer';
import NameForm from './NameForm'

class SidebarComponent extends Component {
    render() {
        let linkContainer = [];
        if(this.props.navList){
            this.props.navList.forEach((value, index) => {
                linkContainer.push(<LinkComponent apiUrl={value.url} urlName={value.name}  key={index} color={value.color}></LinkComponent>)
            });
        }
        return (
            <Fragment>
            <ul>
              {linkContainer}
            </ul>
            <div>
                {/* <TagsContainer posts={this.props.posts}></TagsContainer> */}
                <NameForm></NameForm>
            </div>
            </Fragment>
        )
    }
}

export default SidebarComponent;