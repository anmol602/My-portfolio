var slidercounter = 0;
var slidercontent = [
    "Developer",
    "Designer",
    "Youtube",
    "Code",

];
var slidervalue = document.querySelector("#slidervalue");

function slide() {
    if (slidercounter >= slidercontent.length) {
        slidercounter = 0;

    }
    slidervalue.innerHTML = "";
    slidervalue.classList.remove("holder-animation");
    void slidervalue.offsetwidht;
    slidervalue.classList.add("holder-animation");

    for (i = 0; i < slidercontent[slidercounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = slidercontent[slidercounter][i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = [i] || "&nbsp;";
        }
        letterDiv.classList.add("start")
        letterDiv.classList.add("animation")
        letterDiv.style.animationDelay = i / 10 + "s";
        slidervalue.appendChild(letterDiv);

    }
    slidercounter ++;
}
slide();
setInterval(slide, 2000);

/*toggle menu*/
$('.menu-btn').click(function(){
  $('.menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

/*scroll animation*/
const sr = ScrollReveal({
    origin: "top",
    distance:"80px",
    duration:2000,
    reset: true
});

sr.reveal(".featured-text" ,{});
sr.reveal(".home-img", {delay: 200 });
 
sr.reveal(".heading", {});