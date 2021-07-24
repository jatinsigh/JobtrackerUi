import react from "react"
import Footer from "./footer"
import Nav from "./nav"

class AdminViewOfJobs extends react.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Nav/>
                <div class="container">
                    <div class="column">            
                        <div class="row">
                            <h3>Select the Page you want to see</h3>
                        </div>
                        <div class="row">
                            <h5 id="allusers"><a href="#">All users</a></h5>
                        </div>
                        <div class="row">
                            <h5 id="alljobs"><a href="../html/viewAllJobs.html">All Jobs</a></h5>
                        </div>
                        <div class="row">
                            <h5 id="alluserlogs"><a href="#"> All Userlogs</a></h5>    
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default AdminViewOfJobs;