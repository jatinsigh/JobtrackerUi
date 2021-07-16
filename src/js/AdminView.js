// import axios from "axios";

function doTakeAwayToPage(){
    let choice=getData(list);

    if(choice === "jobs"){
        alert('go to Jobs page')
    }else if(choice ==='user'){
        alert('go to users page')
    }else if(choice == 'userlogs'){
        alert('go to userlogs page')
    }else{
        alert('Please Select items from the dropdowns');
    }
}

// function sendRequest(url){
//     axios.get(url)
//     .then(  (response)=>{
//             data=response.data
//             }
//     ).catch((error)=>{
//         console.log(error)
//     })
// }

function getDataValue(id_name){
    return document.getElementById(id_name).value;
}