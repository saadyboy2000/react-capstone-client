import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
//import { Control } from 'react-redux-form';
import {registerForm} from '../actions/forms';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {Link, Redirect} from 'react-router-dom';

//import NavigationBar from './NavigationBar';
//https://davidkpiano.github.io/react-redux-form/docs/api/Control.html
//react-redux form documentation
//https://www.npmjs.com/package/react-redux-form
//ask about field, where you can find that documentation, also how to just have a label
//when do I use select?

export class ContactForm extends React.Component {
    onSubmit(values) {
        const {username, email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications} = values;
        const form = {username,email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications};
        return this.props
            .dispatch(registerForm(form))
            .then(() => this.props.dispatch((username,email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications)));
    }
        /*
        return fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }

*/

    render() {
      /*  let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
*/      //add select to all your options
        return (
            <div className = "container">
               <div className = "form-link">
                    <Link to= "/Dashboard" className = "navbar-brand"> Dashboard</Link>
                </div>
            
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
              <Field
                    name="username"
                    type="text"
                    component={Input}
                    label="please re-enter your username"
                    validate={[required, nonEmpty]}
                />
              
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="please enter your email address"
                    validate={[required, nonEmpty, email]}
                />

                <Field
                    name="age"
                    type="text"
                    component={Input}
                    label="What is your age?"
                    validate={[required, nonEmpty]}
                />

                <label>What is your marrital status?</label>

                 <Field
                    name="marital"
                    component="select"
                    label="What is your marital status?"> 
                    <option value="married">married</option>
                    <option value="separated">single</option>
                    <option value="divorced">divorced</option>
                    <option value="widowed">widowed</option>
                    <option value="separated">separated</option>
                </Field>

                    <label>Which hand is your dominant hand?</label>

                 <Field
                    name="hand"
                    component="select"
                    label="Which hand is your dominant hand?"> 
                    <option value="select">select</option>
                    <option value="right">right</option>
                    <option value="left">left</option>
                </Field>

                   <Field
                    name="interpreter"
                    type="text"
                    component={Input}
                    label="If you're using an interpreter, please enter their name and agency"
                />
              
                   <Field
                    name="medicalIssue"
                    element="textarea"
                    component={Input}
                    label="Please describe your main medical issue"
                    validate={[required, nonEmpty]}
                />
                   <Field
                    name="presentIllness"
                    element="textarea"
                    component={Input}
                    label="Please describe any present Illness"
                />

                <label>Do you use tobacco?</label>

                 <Field
                    name="tobacco"
                    component="select"
                    label="Do you use tobacco?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>
              
                <label>Do you use nonmedical drugs?</label>

                 <Field
                    name="nonmedicalDrugs"
                    component="select"
                    label="Do you use nonmedical drugs?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>
             

                <label>Do you use alcohol?</label>

                 <Field
                    name="alcohol"
                    component="select"
                    label="Do you use alcohol?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>

                <label>Do you have VD(venereal disease)?</label>

                 <Field
                    name="VD"
                    component="select"
                    label="Do you have VD "> 
                    <option value="select">select</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>

                <Field
                    name="workedLast"
                    type="text"
                    component={Input}
                    label="When did you work last?(Enter approximate month and/or year)"
                />

           

                <Field
                    name="pastHistory"
                    element="textarea"
                    component={Input}
                    label="Please describe your past medical history"
                />
              
                <Field
                    name="familyHistoryDiabetes"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had diabetes? Ex: Grandma"
                />

                 <Field
                    name="familyHistoryTb"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had TB?(tubercle bacillus)"
                />
                   <Field
                    name="familyHistoryHeartDisease"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had heart disease?"
                />

                 <Field
                    name="familyHistoryCancer"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had Cancer?"
                />

                <Field
                    name="otherFamilyHistory"
                    element="textarea"
                    component={Input}
                    label="Are there any other major diseases any family members have had?"
                />

                <Field
                    name="disabilityBegin"
                    type="text"
                    component={Input}
                    label="When did your disability begin?(date)"
                />

                <label>What is the origin of your major disability?</label>

                 <Field
                    name="origin"
                    component="select"
                    label="What is the origin of your major disability?"> 
                    <option value="unknown">unknown</option>
                    <option value="disease">disease</option>
                    <option value="injury">injury</option>
                    <option value="congenital">congenital</option>
                    <option value="hereditary">hereditary</option>
                    <option value="birth trauma">birth trauma</option>
                    <option value="other">other</option>
                </Field>

                 <Field
                    name="otherSpecify"
                    type="text"
                    component={Input}
                    label="If other was selected in the last question please specify the origin of your major disability"
                />

                <Field
                    name="Medications"
                    element="textarea"
                    component={Input}
                    label="Please list any medicines you're currently taking"
                    validate={[required, nonEmpty]}

                />


                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    submit
                </button>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contact',
   onSubmitFail: (errors, dispatch) => {
      //dispatch(focus('contact', Object.keys(errors)[0]))
   }
})(ContactForm);


