/**
 * Draws basic user information in a card.
 * Created by jcortes on 25/02/2016.
 */
import React from 'react';

class UserCard extends React.Component{

    constructor(){
        super();
        this.state ={
            showingExtraInfo: false
        }
    }

    static propTypes ={
        photo: React.PropTypes.string,
        name: React.PropTypes.string,
        telephone: React.PropTypes.number
    };

    onAvatarImageClick = () =>{
        this.setState({
            showingExtraInfo: true
        });
    };

    render() {
        var extraInfo;
        if (this.state.showingExtraInfo){
            extraInfo = [<div>Age: {this.props.age}</div>, <div>Github: {this.props.githubUser}</div>];
        }

        return <div>
            <img src={this.props.avatar} onClick={this.onAvatarImageClick}/>
            <div>Name: {this.props.name}</div>
            <div>Telephone: {this.props.telephone}</div>
            {extraInfo}
        </div>
    }
}

export default UserCard;