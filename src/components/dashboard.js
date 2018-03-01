import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {Link, Redirect} from 'react-router-dom';
import formList from './form-list';


//iterate over state for forms, filter for username

//dashboard link should be hidden until


export class Dashboard extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log(this.props.forms);
        let formsList = [];

        this.props.forms.forEach((form, index) => {
            //add if statement checking for admin account(filter, you will only push if form is for current user)
            if(this.props.username === 'admin'){
                formsList.push(
                <div className = "formList">
                <li key={form._id + index}><span className="label"> Form Id: </span> {form._id}</li>
                <li key ={form.age+ index}>Patient age: {form.age}</li>
                 <li key ={form.email+ index}>Patient email: {form.email}</li>
                 <li key ={form.marital+ index}>Patient married status: {form.marital}</li>
                 <li key ={form.hand+ index}>Patient dominant hand: {form.hand}</li>
                 <li key ={form.medicalIssue+index}>Main Medical Issue: {form.medicalIssue}</li>
                 <li key ={form.tobacco+index}>Patient uses tobacco?: {form.tobacco}</li>
                 <li key ={form.alcohol+index}>Patient uses alcohol?: {form.alcohol}</li>
                 <li key ={form.nonmedicalDrugs+index}>Patient uses street drugs?: {form.nonmedicalDrugs}</li>
                 <li key ={form.tobacco+index}>Patient uses tobacco?: {form.tobacco}</li>
                 <li key ={form.workedLast+index}>Patient worked last in: {form.workedLast}</li>
                 <li key ={form.pastHistory+index}>Patient past history: {form.pastHistory}</li>
                 <li key ={form.familyHistoryDiabetes+index}>Family Diabetes History: {form.familyHistoryDiabetes}</li>
                 <li key ={form.familyHistoryHeartDisease+index}>Family Heart Disease History: {form.familyHistoryDiabetes}</li>
                 <li key ={form.familyHistoryTb+index}>Family TB history: {form.familyHistoryTb}</li>
                 <li key ={form.familyHistoryCancer+index}>Family cancer history: {form.familyHistoryCancer}</li>
                 <li key ={form.otherFamilyHistory+index}>Other family history: {form.otherFamilyHistory}</li>
                 <li key ={form.disabilityBegin+index}>Disability Began: {form.disabilityBegin}</li>
                 <li key ={form.origin+index}>Origin of major Disability: {form.origin}</li>
                 <li key ={form.otherSpecify+index}>Specify if other: {form.otherSpecify}</li>
                 <li key ={form.Medications+index}>Medications being taken: {form.Medications}</li>
                </div>
            )
                
            }
           else if(this.props.username === form.username){
                formsList.push(
                <div className= "formList">
                <li key={form._id+index}><span className="label"> Form Id: </span> <span className = "value">{form._id}</span></li>
                <li key ={form.age+index}><span className="label">Patient age: </span> <span className = "value">{form.age}</span></li>
                 <li key ={form.email+index}><span className="label">Patient email: </span><span className = "value">{form.email}</span></li>
                 <li key ={form.marital+index}><span className="label">Patient married status:</span><span className = "value"> {form.marital}</span></li>
                 <li key ={form.hand+index}><span className="label">Patient dominant hand:</span><span className = "value"> {form.hand}</span></li>
                 <li key ={form.medicalIssue+index}><span className="label">Main Medical Issue:</span><span className = "value"> {form.medicalIssue}</span></li>
                 <li key ={form.tobacco+index}><span className="label">Patient uses tobacco?:</span><span className = "value">{form.tobacco}</span></li>
                 <li key ={form.alcohol+index}><span className="label">Patient uses alcohol?:</span><span className = "value">{form.alcohol}</span></li>
                 <li key ={form.nonmedicalDrugs+index}><span className="label">Patient uses street drugs?:</span><span className = "value">{form.nonmedicalDrugs}</span></li>
                 <li key ={form.workedLast+index}><span className="label">Patient worked last in:</span><span className = "value">{form.workedLast}</span></li>
                 <li key ={form.pastHistory+index}><span className="label">Patient past history:</span><span className = "value">{form.pastHistory}</span></li>
                 <li key ={form.familyHistoryDiabetes+index}><span className="label">Family Diabetes History:</span><span className = "value">{form.familyHistoryDiabetes}</span></li>
                 <li key ={form.familyHistoryHeartDisease+index}><span className="label">Family Heart Disease History:</span><span className = "value"> {form.familyHistoryDiabetes}</span></li>
                 <li key ={form.familyHistoryTb+index}><span className="label">Family TB history:</span> <span className = "value">{form.familyHistoryTb}</span></li>
                 <li key ={form.familyHistoryCancer+index}><span className="label">Family cancer history:</span> <span className = "value">{form.familyHistoryCancer}</span></li>
                 <li key ={form.otherFamilyHistory+index}><span className="label">Other family history:</span> <span className = "value">{form.otherFamilyHistory}</span></li>
                 <li key ={form.disabilityBegin+index}><span className="label">Disability Began:</span> <span className = "value">{form.disabilityBegin}</span></li>
                 <li key ={form.origin+index}><span className="label">Origin of major Disability:</span> <span className = "value">{form.origin}</span></li>
                 <li key ={form.otherSpecify+index}><span className="label">Specify if other:</span><span className = "value">{form.otherSpecify}</span></li>
                 <li key ={form.Medications+index}><span className="label">Medications being taken:</span><span className = "value"> {form.Medications}</span></li>
                </div>
            )
            }
            

        });
                
          
        return (
            <div className="dashboard">
                <div className="dashboard-username">

                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                <div className = "container">
                <ul>
                    {formsList}
                </ul>
                </div>
                </div>
                <div className = "dashboard-link">
                    <Link to= "/form" className = "navbar-brand">Dr. Rana's Form</Link>
                </div>
                     <h1></h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        email: state.auth.currentUser.email,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        forms: state.protectedData.forms || []

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
