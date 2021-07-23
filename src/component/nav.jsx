import react from "react";
import App from "../App.css"

class Nav extends react.Component {
    state = {  }
    render() {  
        return ( 
            <div class= "border">
                <div class="wrapper">
                    <header class= "main-header clearfix">
                        <div class="logo">
                            <image src= "https://picsum.photos/75/75"></image>
                            <h1><b>Jobs</b><span>Tracker</span></h1>
                        </div>
                        <nav class= "nav">
                            <a href="#" class="current">All Jobs</a>
                            <a href="#">Latest Jobs</a>
                            <a href="#">Jobs by Profile</a>
                            <a href="#">Jobs by location</a>
                        </nav>
                    </header>
                </div>
            </div>
         );
    }
}
 
export default Nav;