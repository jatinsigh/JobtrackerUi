import react from 'react'
import Nav from './nav'
import Footer from './footer'
import '../css/main.css'

class Register extends react.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Nav/>
                <div class="container">
                        <form>
                            <h2>Register yourself!</h2>
                                <div class="form-group">
                                    <label for="exampleInputfname1">First name</label>
                                    <input type="text" class="form-control" id="exampleInputfname1" aria-describedby="emailHelp" placeholder="Enter First name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputlname1">Last name</label>
                                    <input type="text" class="form-control" id="exampleInputlname1" aria-describedby="emailHelp" placeholder="Enter Last name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputemail">Email id</label>
                                    <input type="email" class="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div> 
                <Footer/>
            </div>
        );
    }
}
 
export default Register;