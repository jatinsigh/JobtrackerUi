$(document).ready(() => {
  $(".card:first").hide();
  render();
});

function render() {
  $.ajax({
    url: "http://localhost:8051/admin/alljobs/",

    success: function (result) {
      $.each(result, function (index, item) {
        console.log(item);
        var cards = $(".card:first").clone();
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
        $(cards).appendTo($(".container")); //append to container
      });
    },
  });
}
