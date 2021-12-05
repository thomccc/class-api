var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",

};

fetch("https://v1.nocodeapi.com/thomccc/spotify/dMSzLMrNIoyiuNeU/artists?id=04uu8U3I1h26Fp2NBkPTRZ", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
