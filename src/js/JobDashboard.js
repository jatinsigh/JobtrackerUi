$(document).ready(() => {
  //$("#new-job-card").hide();
  $("#job-card").hide();

  refreshJobsDisplay();
  $("#dynamicholder").on("click", ".btn-warning", function () {

    $("#JobId").val(this.id);
    $(this).closest('#job-role').attr('value')

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
