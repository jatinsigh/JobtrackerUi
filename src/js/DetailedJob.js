let JobId=1;

function sendRequest() {
    let url = "http://localhost:8051/job/userid/"
    url+=JobId;
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

function FetchingJobDetailsFromMicroService(){
    for (const i of data) {
        if(i.id===1)
        {   setData(companyname,i.companyName);
            setData(jobprofile,i.jobRole);
            setData(postedon,i.postedOn);
         //   setData(companyname,i.companyName);
            return ;
        }
    }
}

function setData(id_name,val){
    document.getElementById(id_name).value=val;
}

fucntion getData(id_name)
{   return document.getElementById(id_name).value;
}