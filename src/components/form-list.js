import React from 'react';
import {connect} from 'react-redux';


class formList extends React.Component {
    render(){
        return (
            <ul>
                <li>saaderana@gmail.com 1234 </li>
            </ul>
        )
    }
}


export default connect(formList);





















//iterate over state for forms, filter for username
//can i use this?
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

/*export function formList(props) {

       console.log(this.props);
    



        return (

                <h1> Test</h1>
               /* <div className="dashboard-protected-data">
                    Protected data: 
                    <li>{this.props.protectedData.username}{this.props.protectedData.medicalIssue}
                    </li>
                </div> */
  //              );
               
            

//}


//export default formList;

