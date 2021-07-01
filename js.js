const styleSheets = Array.from(document.styleSheets).filter(
    (styleSheet) => !styleSheet.href || styleSheet.href.startsWith(window.location.origin)
  );

const solo1 = document.querySelector(".solo1");
const solo2 = document.querySelector(".solo2");
const solo3 = document.querySelector(".solo3");
const solo4 = document.querySelector(".solo4");
const solo5 = document.querySelector(".solo5");
const solo6 = document.querySelector(".solo6");
const solo7 = document.querySelector(".solo7");
const solo8 = document.querySelector(".solo8");
const solo9 = document.querySelector(".solo9");

function repeat(){
    setInterval(function(){
        let randomWidth1 = Math.floor((Math.random() * 299) + 60),
        randomTop1 = Math.floor((Math.random() * 10) + 0),
        randomDelay1 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth2 = Math.floor((Math.random() * 299) + 60),
        randomTop2 = Math.floor((Math.random() * 10) + 10),
        randomDelay2 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth3 = Math.floor((Math.random() * 299) + 60),
        randomTop3 = Math.floor((Math.random() * 10) + 20),
        randomDelay3 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth4 = Math.floor((Math.random() * 299) + 60),
        randomTop4 = Math.floor((Math.random() * 10) + 30),
        randomDelay4 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth5 = Math.floor((Math.random() * 299) + 60),
        randomTop5 = Math.floor((Math.random() * 10) + 40),
        randomDelay5 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth6 = Math.floor((Math.random() * 299) + 60),
        randomTop6 = Math.floor((Math.random() * 10) + 50),
        randomDelay6 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth7 = Math.floor((Math.random() * 299) + 60),
        randomTop7 = Math.floor((Math.random() * 10) + 60),
        randomDelay7 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth8 = Math.floor((Math.random() * 299) + 60),
        randomTop8 = Math.floor((Math.random() * 10) + 70),
        randomDelay8 = Math.random() * (2.5 - 0.3) + 0,

        randomWidth9 = Math.floor((Math.random() * 299) + 60),
        randomTop9 = Math.floor((Math.random() * 10) + 80),
        randomDelay9 = Math.random() * (2.5 - 0.3) + 0.3;
        console.log(randomTop2);

    document.styleSheets[1].cssRules[4].style.width = randomWidth1 + "px";
    document.styleSheets[1].cssRules[4].style.top = randomTop1 + "vh";
    document.styleSheets[1].cssRules[5].style.animationDelay = randomDelay1 + "s" ;
    document.styleSheets[1].cssRules[6].style.width = randomWidth2 + "px";
    document.styleSheets[1].cssRules[6].style.top = randomTop2 + "vh";
    document.styleSheets[1].cssRules[7].style.animationDelay = randomDelay2 + "s" ;
    document.styleSheets[1].cssRules[8].style.width = randomWidth3 + "px";
    document.styleSheets[1].cssRules[8].style.top = randomTop3 + "vh";
    document.styleSheets[1].cssRules[9].style.animationDelay = randomDelay3 + "s" ;
    document.styleSheets[1].cssRules[10].style.width = randomWidth4 + "px";
    document.styleSheets[1].cssRules[10].style.top = randomTop4 + "vh";
    document.styleSheets[1].cssRules[11].style.animationDelay = randomDelay4 + "s" ;
    document.styleSheets[1].cssRules[12].style.width = randomWidth5 + "px";
    document.styleSheets[1].cssRules[12].style.top = randomTop5 + "vh";
    document.styleSheets[1].cssRules[13].style.animationDelay = randomDelay5 + "s" ;
    document.styleSheets[1].cssRules[14].style.width = randomWidth6 + "px";
    document.styleSheets[1].cssRules[14].style.top = randomTop6 + "vh";
    document.styleSheets[1].cssRules[15].style.animationDelay = randomDelay6 + "s" ;
    document.styleSheets[1].cssRules[16].style.width = randomWidth7 + "px";
    document.styleSheets[1].cssRules[16].style.top = randomTop7 + "vh";
    document.styleSheets[1].cssRules[17].style.animationDelay = randomDelay7 + "s" ;
    document.styleSheets[1].cssRules[18].style.width = randomWidth8 + "px";
    document.styleSheets[1].cssRules[18].style.top = randomTop8 + "vh";
    document.styleSheets[1].cssRules[19].style.animationDelay = randomDelay8 + "s" ;
    document.styleSheets[1].cssRules[20].style.width = randomWidth9 + "px";
    document.styleSheets[1].cssRules[20].style.top = randomTop9 + "vh";
    document.styleSheets[1].cssRules[21].style.animationDelay = randomDelay9 + "s" ;

    solo1.classList.add("anim1");
    solo2.classList.add("anim2");
    solo3.classList.add("anim3");
    solo4.classList.add("anim4");
    solo5.classList.add("anim5");
    solo6.classList.add("anim6");
    solo7.classList.add("anim7");
    solo8.classList.add("anim8");
    solo9.classList.add("anim9");
    }, 3000)
}
repeat();

function remove(){
    setInterval(function(){
    solo1.classList.remove("anim1");
    solo2.classList.remove("anim2");
    solo3.classList.remove("anim3");
    solo4.classList.remove("anim4");
    solo5.classList.remove("anim5");
    solo6.classList.remove("anim6");
    solo7.classList.remove("anim7");
    solo8.classList.remove("anim8");
    solo9.classList.remove("anim9");
    }, 2999)
}

remove();