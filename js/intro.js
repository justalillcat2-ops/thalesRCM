// =========================
// ELEMENTOS
// =========================

const logo = document.getElementById("logo");

const boot = document.getElementById("bootScreen");

const bootText = document.getElementById("bootText");

const progress = document.querySelector(".progressBar");

const percent = document.getElementById("percent");

const finalScreen = document.getElementById("finalScreen");

const artist = document.getElementById("artistName");

const quote = document.getElementById("quote");

const enter = document.getElementById("enterButton");

// =========================
// LISTA DO BOOT
// =========================

const bootSteps = [
    "Inicializando",
    "Carregando músicas",
    "Bem-vindo"
];

// =========================
// INÍCIO
// =========================

window.onload = () => {

    setTimeout(showLogo,1000);

};

// =========================
// THALES
// =========================

logo.style.display = "block";

logo.setAttribute("data-text","THALES");

logo.animate(

[
{
opacity:0,
transform:"translateY(80px) scale(.8)"
},

{
opacity:1,
transform:"translateY(0px) scale(1)"
}

],

{

duration:900,

fill:"forwards",

easing:"cubic-bezier(.17,.84,.44,1)"

}

);
// =========================
// GLITCH
// =========================

function glitchLogo(){

    let i=0;

    const effect=setInterval(()=>{

        logo.style.transform=
        `translate(${Math.random()*8-4}px,
        ${Math.random()*8-4}px)`;

        logo.style.opacity=Math.random();

        i++;

        if(i>18){

            clearInterval(effect);

            logo.style.transform="translate(0,0)";
            logo.style.opacity="1";

        }

    },60);

}

// =========================
// BOOT
// =========================

async function startBoot(){

    boot.style.display="block";

    for(let step of bootSteps){

        bootText.innerText=step;

        await loadBar();

    }

    boot.style.display="none";

    showFinal();

}

// =========================
// BARRA
// =========================

function loadBar(){

return new Promise(resolve=>{

let value=0;

progress.style.width="0%";

percent.innerHTML="0%";

const timer=setInterval(()=>{

value++;

progress.style.width=value+"%";

percent.innerHTML=value+"%";

if(value>=100){

clearInterval(timer);

setTimeout(resolve,500);

}

},20);

});

}

// =========================
// FINAL
// =========================

function showFinal(){

finalScreen.style.display="block";

artist.style.opacity="0";
    artist.classList.add("glitch");
    artist.setAttribute("data-text","THALESRCM");

quote.style.opacity="0";

enter.style.opacity="0";

artist.style.transition="2s";
quote.style.transition="2s";
enter.style.transition="2s";

setTimeout(()=>{

artist.style.opacity="1";

},500);

setTimeout(()=>{

quote.style.opacity="1";

typeWriter();

},1800);

setTimeout(()=>{

enter.style.opacity="1";

},3200);

}

// =========================
// ENTER
// =========================

enter.onclick = () => {

    enter.disabled = true;

    document.body.classList.add("flash");

    setTimeout(() => {

        document.getElementById("eyeFlash").style.display = "flex";

    }, 100);

    setTimeout(() => {

        document.body.classList.add("tvOff");

    }, 380);

    setTimeout(() => {

        document.body.classList.add("fadeOut");

    }, 550);

    setTimeout(() => {

        window.location.href = "home.html";

    }, 1000);

};
// =========================
// TYPEWRITER
// =========================

const originalQuote =
"The beauty of a rotten world lies in the words of someone who wishes to see it become better.";

function typeWriter(){

quote.innerHTML="";

let i=0;

const typing=setInterval(()=>{

quote.innerHTML += originalQuote.charAt(i);

i++;

if(i>=originalQuote.length){

clearInterval(typing);

}

},28);

}
logo.style.display = "block";

logo.classList.add("powerOn");

logo.classList.add("tvGlitch");

logo.setAttribute("data-text","THALES");
mainScreen.style.display = "block";

setTimeout(()=>{

mainScreen.style.opacity = "1";

artist.setAttribute("data-text","THALESRCM");

},100);
