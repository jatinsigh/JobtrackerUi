$(document).ready(() => {
  //$("#new-job-card").hide();
  $("#job-card").hide();
  $.ajax({
    url: "http://localhost:8051/admin/alljobs/",

    success: function (result) {
      render(result);
    },
  });
});

var helper = (evt) => {
  evt.preventDefault();
  let jobId = parseInt(document.getElementById("JobId").value);
  let jobRole = document.getElementById("JobRole").value;
  let postedOn = document.getElementById("PostedOn").value;
  let companyNme = document.getElementById("CompanyName").value;
  let companyUrl = document.getElementById("CompanyUrl").value;
  //console.log({ jobId, jobRole, postedOn, companyNme, companyUrl });
  axios
    .post("http://localhost:8051/admin/jobpost/add/", {
      jobId,
      jobRole,
      postedOn,
      companyNme,
      companyUrl,
    })
    .then((response) => {
      alert("Job Inserted successfully");
      $.ajax({
        url: "http://localhost:8051/admin/alljobs/",

        success: function (result) {
          render(result);
        },
      });
    })
    .catch(console.error);
};

function render(result) {
  $.each(result, function (index, item) {
    //console.log(item);
    var cards = $("#job-card").clone();
    var jobRole = item.jobRole;
    var postedOn = item.postedOn;
    var companyName = item.companyName;
    var companyUrl = item.companyUrl;
    //add values inside divs
    $(cards).find("#company-name").html(companyName);
    $(cards).find("#job-role").html(jobRole);
    $(cards).find("#company-url").html(companyUrl);
    $(cards).find("#posted-on").html(postedOn);
    $(cards).show(); //show cards
    $(cards).appendTo($("#dynamicholder")); //append to dynamic holder
  });
}
