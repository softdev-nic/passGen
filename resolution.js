    const resolutions = [
    "540x960",
    "720x1280",
    "1080x1920",
    "1440x2560",
    "1280x720",
    "3840x2160",
    "1024x768",
];
 let genbtn_res = document.getElementById("generatebtn");
    let pass_res = document.getElementById("password");
    let copybtn_res = document.getElementById("copybtn");
    let copiedtext_res = document.getElementById("copied");
    let container_res = document.getElementById("container");
    let form_res = document.getElementById("form");
    window.onresize = () => {
        let res = window.screen.width;
switch(true)
 {
    case res<=314:
    container_res.style.backgroundColor = "whitesmoke";
    container_res.style.width = res + "px";
    container_res.style.height = "auto";
    container_res.style.display = "flex";
    container_res.style.flexDirection = "column";
    container_res.style.justifyContent = "center";
    container_res.style.alignItems = "center";
    container_res.style.textAlign = "center";
    form_res.style.width = "100%";
    form_res.style.display = "flex";
    form_res.style.flexDirection = "column";
    form_res.style.justifyContent = "center";
    form_res.style.alignItems = "center";
    form_res.style.textAlign = "center";

    break;
    case 314<res<=600:
       container_res.style.backgroundColor = "whitesmoke";
    container_res.style.width = res + "px";
    container_res.style.height = "auto";
    container_res.style.display = "flex";
    container_res.style.flexDirection = "column";
    container_res.style.justifyContent = "center";
    container_res.style.alignItems = "center";
    container_res.style.textAlign = "center";
    form_res.style.width = "100%";
    form_res.style.display = "flex";
    form_res.style.flexDirection = "column";
    form_res.style.justifyContent = "center";
    form_res.style.alignItems = "center";
    form_res.style.textAlign = "center";


 }
    };
