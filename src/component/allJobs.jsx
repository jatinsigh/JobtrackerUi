import react from "react";
import Nav from "./nav";
class AllJobs extends react.Component {
    state = {  }
    render() { 
        return ( 
           <div class = "border">
               <Nav/>
               <div class= "wrapper">
                   <ul id = "timeline">
                       <a href="#">
                           <li class = "listing-clearfix">
                               <div class= "image_wrapper">
                               <img src= "images/twitter.jpg" alt= "Twitter"/>
                               </div>
                               <div class= "info">
                <span class= "job_title" id="job_title">UX Designer</span>
           <span class= "job_info" id= "job_info">Twitter<span>&bull;</span>
           Bengaluru<span>&bull;</span> June 30th 2021 </span>
            </div>
                           </li>
                       </a>
                   </ul>
                   <ul id= "timeline">
        <a href="#">
            <li class= "listing clearfix">
                <div class= "image_wrapper">
                <img src= "images/apple.jpg" alt= "Apple"/>
            </div>
            <div class= "info">
                <span class= "job_title">Product Manager</span>
           <span class= "job_info">Apple<span>&bull;</span>
            Hyderabad<span>&bull;</span> August 1st 2021 </span>
            </div>
           
            </li>
        </a>

    </ul>

    <ul id= "timeline">
        <a href="#">
            <li class= "listing clearfix">
                <div class= "image_wrapper">
                <img src= "images/swiggy.jpg" alt= "Swiggy"/>
            </div>
            <div class= "info">
                <span class= "job_title">Software Developer</span>
           <span class= "job_info">Swiggy<span>&bull;</span>
            Gurgaon<span>&bull;</span> June 22nd 2021 </span>
            </div>
           
            </li>
        </a>
    </ul>


               </div>

               <div class="footer">
                <p>2021 Technical Profile Tracker</p>
            </div>
           </div>


         );
    }
}
 
export default AllJobs;