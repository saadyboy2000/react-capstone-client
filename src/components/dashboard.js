import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {Link, Redirect} from 'react-router-dom';
import formList from './form-list';

//iterate over state for forms, filter for username

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log(this.props.protectedData.forms);
        //let formsList = this.props.protectedData.forms.forEach((form, index) => console.log(form));
                
          
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                 
                </div>
                <div className = "dashboard-link">
                    <Link to= "/form" className = "navbar-brand"> Dr Rana Form Completer</Link>
                </div>
                <formList form={this.props.protectedData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
