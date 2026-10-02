"use strict"
function searchAddress(){
    const zipCode = document.getElementById("searchBox").value;
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
    .then(response => {
     return response.json().then(codeInfo => {
        console.log(codeInfo.results);

        const view =`
        <p>${codeInfo.results[0].zipcode}</p>
        <p>${codeInfo.results[0].address1}${codeInfo.results[0].address2}${codeInfo.results[0].address3}</p>
        <p>${codeInfo.results[0].kana1}${codeInfo.results[0].kana2}${codeInfo.results[0].kana3}</p>

       `;
        const result = document.getElementById("result");
        result.innerHTML = view;
     })
    });

}
