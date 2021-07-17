function sendRequest() {
    let url = "http://localhost:8051/alljobs"
    
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