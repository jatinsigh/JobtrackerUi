import react from "react"
import Footer from "./footer"
import Nav from "./nav"

class JobDashboard extends react.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Nav/>
                    <div class="container">
                        <div class="cloumn">
                            <div class="row">
                                <h4>Company Name</h4><p id="companyname">Publicis Sapient</p>
                            </div>
                            <div class="row" >
                                <h4>Job Profile</h4><p id="jobprofile">Associate Software Development Engineer 1</p>
                            </div>
                            <div class="row">
                                <h4>Posted On</h4><p id="postedon">15 july, 2021</p>
                            </div>
                            <div class="row">
                                <h4>Skills Required</h4><p id="skills">DSA, Java, SpringBoot, Javascript</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Apply for the job</button>   
                <Footer/>
            </div>
        );
    }
}
 
export default JobDashboard;