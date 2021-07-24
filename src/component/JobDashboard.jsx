import react from "react";
import Footer from "./footer";
import Nav from "./nav";

class JobDashboard extends react.Component {
  state = {};
  componentDidMount() {
    $(document).ready(() => {
      //$("#new-job-card").hide();
      $("#job-card").hide();

      refreshJobsDisplay();
      $("#dynamicholder").on("click", ".btn-warning", function () {
        $("#JobId").val(this.id);
        $(this).closest("#job-role").attr("value");

        alert("Donot change Job Id in Job updation form");

        window.scroll(0, 0);
      });

      $("#dynamicholder").on("click", ".btn-danger", function () {
        axios
          .delete("http://localhost:8051/admin/jobpost/delete/" + this.id)
          .then(() => {
            alert("job post deleted successfully");
            refreshJobsDisplay();
          })
          .catch(console.log("error while deleting job post"));
      });
    });

    var helper = (evt) => {
      evt.preventDefault();
      let jobId = parseInt(document.getElementById("JobId").value);
      let jobRole = document.getElementById("JobRole").value;
      let postedOn = document.getElementById("PostedOn").value;
      let companyName = document.getElementById("CompanyName").value;
      let companyUrl = document.getElementById("CompanyUrl").value;
      //console.log({ jobId, jobRole, postedOn, companyName, companyUrl });
      axios
        .post("http://localhost:8051/admin/jobpost/add/", {
          jobId,
          jobRole,
          postedOn,
          companyName,
          companyUrl,
        })
        .then((response) => {
          alert("Job Inserted successfully");
          refreshJobsDisplay();
        })
        .catch(console.error);
    };

    function refreshJobsDisplay() {
      $("#dynamicholder").empty();
      $.ajax({
        url: "http://localhost:8051/admin/alljobs/",

        success: function (result) {
          $.each(result, function (index, item) {
            //console.log(item);
            var cards = $("#job-card").clone();
            var jobId = item.jobId;
            var jobRole = item.jobRole;
            var postedOn = item.postedOn;
            var companyName = item.companyName;
            var companyUrl = item.companyUrl;
            //add values inside divs
            $(cards).find("#company-name").html(companyName);
            $(cards).find("#job-role").html(jobRole);
            $(cards).find("#company-url").html(companyUrl);
            $(cards).find("#posted-on").html(postedOn);
            $(cards).find("#edit-button").prop("id", jobId);
            $(cards).find("#delete-button").prop("id", jobId);
            $(cards).show(); //show cards
            $(cards).appendTo($("#dynamicholder")); //append to dynamic holder
          });
        },
      });
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="wrapper-class">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Jobs Tracker
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">
                      All Jobs
                    </a>
                    <a className="nav-link" href="#">
                      Latest Jobs
                    </a>
                    <a className="nav-link" href="#">
                      Jobs by Profile
                    </a>
                    <a className="nav-link" href="#">
                      Jobs by Location
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="card-holder" id="new-job-card">
              <div className="card text-center">
                <div className="card-header">
                  <h3>Job updation form</h3>
                </div>
                <div className="card-body">
                  <form action="#" onsubmit="helper(event)">
                    <div className="mb-3">
                      <label htmlFor="JobId" className="form-label">
                        Job Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="JobId"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="JobRole" className="form-label">
                        Job Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="JobRole"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="PostedOn" className="form-label">
                        Job Posted On
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="PostedOn"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="CompanyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="CompanyName"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="CompanyUrl" className="form-label">
                        Company Url
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="CompanyUrl"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Update Job
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card-holder m-5" id="job-card">
            <div className="card text-center">
              <div className="card-header bg-info">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-warning"
                    id="edit-button"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title" id="company-name">
                  Special title treatment
                </h5>
                <p className="card-text" id="job-role">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p className="card-text" id="company-url">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p className="card-text" id="posted-on">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="dynamicholder"></div>
          <div className="footer">
            <p>2021 Technical Profile Tracker</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default JobDashboard;
