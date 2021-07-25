import React from "react";
import Nav from './nav';
import axios from "axios";
import Pagination from './Pagination';
import '../css/main1.css';
import '../css/table.css';
import '../css/style.css';
{/* <link rel="stylesheet" type="text/css" href="../css/main1.css" />
<link rel="stylesheet" type="text/css" href="../css/nav.css" /> */}



class Logs extends React.Component {
    state = { 
        data:'',
        flag: false,
     }
    display = () => {
        let base_url = 'http://localhost:8053/admin/userlogs'
        axios.get(base_url).
        then((response) => {
            console.dir(response.data)
            this.setState({data  : response.data, flag : true})
        }).
        catch((error) => console.log(error))
    }
    // fun = () => {
    //     this.setState({flag : false})
    // }
    render() { 
        // if(this.state.flag) {
        //     return (
        //         // <Pagination data = {this.state.data} 
        //         // fun = {this.fun}
        //         // />
        //     )
        // }
        // else{
            return ( 
                <div>
                    <Nav/>
                    <div class="container" id="show-data">
                        <table class="ctable">
                            <thead>
                                <tr>
                                    <th>LOG-ID</th>
                                    <th>Date of Applying</th>
                                    <th>Job Status</th>
                                    <th>Job</th>
                                    <th>User</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                        
                    
                        {/* <div class="inner-container"> */}
                        {/* <div class="button-container">
                                
                                <input type="button" className="btn btn-primary mb-2" value="Display" onClick={this.display}/>
                        </div> */}
                        {/* </div> */}
                    </div>
                    
                    <input type="button" class="input-submit" value="See All Logs" onClick={this.display}/>
                
                    <div class="footer">
                        <p>2021 Technical Profile Tracker</p>
                    </div>
                </div> 
            );
        // }
    }
}
 
export default Logs;