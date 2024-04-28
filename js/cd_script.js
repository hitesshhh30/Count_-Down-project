const endDate = "20 APRIL 2024  11:09 AM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const differnce = (end/1000 - now/1000) ;

    if(differnce <=0) return;
    inputs[0].value = Math.floor(differnce /3600 / 24);
   inputs[1].value = Math.floor((differnce/3600) % 24);
   inputs[2].value = Math.floor((differnce/60) % 60);
   inputs[3].value = Math.floor(differnce % 60)

}

clock();

setInterval(() => {
    clock()
    
},1000);


