let lightMode= localStorage.getItem('lightMode');
const icon = document.querySelector('#icon');
const enableLightMode=() =>{
	document.body.classList.add('lightmode');
	localStorage.setItem('lightMode','enabled');
}
const disableLightMode=() =>{
	document.body.classList.remove('lightmode');
	localStorage.setItem('lightMode',null);
}
if(lightMode === "enabled"){
	enableLightMode();
	icon.src="logo/moon.png";
	plogo.src="logo/logolightmode.png"
}

icon.addEventListener("click", () =>{
        lightMode= localStorage.getItem('lightMode');
        if(lightMode !== "enabled"){
	        enableLightMode();
	        icon.src="logo/moon.png";
	        plogo.src="logo/logolightmode.png"
        }
        else{
	        disableLightMode();
	        icon.src="logo/sun.png";
	        plogo.src="logo/logolightmode2.png";
        }
});
