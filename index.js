"use strict"
function searchAddress(){
    const zipCode = document.getElementById("searchBox").value;
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
    .then(response => {
     return response.json().then(codeInfo => {
        console.log(codeInfo.results);
     })
    });

}
