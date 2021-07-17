var data;
window.fetchData = function fetchData() {
    sendRequest()
}

function sendRequest() {
    let url = "http://localhost:8053/admin/userlogs"
    
    axios.get(url)
    .then(
        (response) => {
            data = response.data
            console.dir(data)
            f5()
        })
        .catch((error) => {
            console.log(error)
        })
    

}

function f5(){

    var s1 ="<table class='ctable'>";
    s1+= "<thead><tr><th>LOG-ID</th> <th>Date of Applying</th> <th>Job Status</th> <th>Job</th> <th>User</th> <th>Save</th> <th>Delete</th></tr></thead><tbody>"
    for (const i of data) {
        s1+="<tr><td>" + i.userLogid +"</td><td>"+ i.applyDate +"</td><td>"+ "<input type='text' value="+i.jobStatus+">" +"</td><td>"+ i.jobId +"</td><td>"+i.userid+"</td><td><button class='button-save'> save</button></td><td><button class='button-delete'> delete</button></td></tr>"
    }
    s1+="</tbody></table>"
    document.getElementById("show-data").innerHTML =s1;

}