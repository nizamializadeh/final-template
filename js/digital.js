var condition=false;
$(".fa-bars").click(function(){
    if (condition==false) {
        $(".mainDrop").slideDown()
        condition=true;
    }
    else {
        $(".mainDrop").slideUp()
        condition=false;
    }
})
// active click on navigation
$(".navBarChoices ul li a").click(function(elem) {
    $(".navBarChoices ul li a").removeClass("activateLink");
    $(this).addClass("activateLink");
})

// event listener for services button
var serCond=false
var $services = $(".nav .navBar .navBarChoices > ul > li:nth-child(1)");
var $serDropDown = $(".nav .navBar .navBarChoices > ul > li:nth-child(1) ul")
$($services).click(function(){
    if (serCond==false) {
        $($serDropDown).slideDown()
        serCond=true;
    }
    else {
        $($serDropDown).slideUp()
        serCond=false;
    }
})

// event listener for services button in the main dropdown
var mainSerCond=false
var $mainServices = $(".mainDrop > ul > li:nth-child(1)");
var $mainSerDropDown = $(".mainDrop > ul > ul");
$($mainServices).click(function(){
    if (mainSerCond==false) {
        $($mainSerDropDown).slideDown()
        mainSerCond=true;
    }
    else {
        $($mainSerDropDown).slideUp()
        mainSerCond=false;
    }
})

// animation for top slider in the digital page

var $leftBtn = $("#digital .topMovingSlidesFrame .arrowLeft");
var $rightBtn = $("#digital .topMovingSlidesFrame .arrowRight");
var topSliderImgArr = ["img/digital/slider-1.jpg","img/digital/slider-2.jpg"];
var $animatedImg = $("#digital .topMovingSlidesFrame img");
var $h1TopItem = $("#digital .topMovingSlidesFrame .h1");
var $h2TopItem = $("#digital .topMovingSlidesFrame .h2");
var $quoteTopSlides = $("#digital .topMovingSlidesFrame .overBtnsTop")
// event for left button
var indexTop = 0;
$($leftBtn).on("click",function(){
    $($h1TopItem).slideUp(300);
    $($h2TopItem).slideUp(300);
    $($quoteTopSlides).slideUp(300);
    if(indexTop == 1) {
        $($animatedImg).attr("src",topSliderImgArr[0]);
        indexTop = 0;
    }
    else {
        $($animatedImg).attr("src",topSliderImgArr[1]);
        indexTop = 1;
    }
    $($h1TopItem).slideDown(1000);
    $($h2TopItem).slideDown(1000);
    $($quoteTopSlides).slideDown(1000);
    $($animatedImg).stop();
    $($animatedImg).css("width","130%");
    $($animatedImg).animate({width: "150%"},6000);
})

//event for right button 

$($rightBtn).on("click",function(){
    
    $($h1TopItem).slideUp(300);
    $($h2TopItem).slideUp(300);
    $($quoteTopSlides).slideUp(300);
    if(indexTop == 1) {
        $($animatedImg).attr("src",topSliderImgArr[0]);
        indexTop = 0;
    }
    else {
        $($animatedImg).attr("src",topSliderImgArr[1]);
        indexTop = 1;
    }
    $($h1TopItem).slideDown(1000);
    $($h2TopItem).slideDown(1000);
    $($quoteTopSlides).slideDown(1000);
    $($animatedImg).stop();
    $($animatedImg).css("width","130%");
    $($animatedImg).animate({width: "150%"},6000);
})

// for the central slider 

    // for the first button
$("#digital .centralSliderButton:nth-child(1) img").click(function(){
    $("#digital .centralSliderFrame .centralSliderLent").animate({ left:"0%" },800);
});
    // for the second button
$("#digital .centralSliderButton:nth-child(2) img").click(function(){
    $("#digital .centralSliderFrame .centralSliderLent").animate({ left:"-100%" },800);
});
    // for the third button
$("#digital .centralSliderButton:nth-child(3) img").click(function(){
    $("#digital .centralSliderFrame .centralSliderLent").animate({ left:"-200%" },800);
});

//progress numbers

$(document).ready(function(){
    var i = 0;
    function numberProg() {
        if($("body").scrollTop() >= 3000) {
            function plusNum() {
                if (i<=2979){
                    i++;
                    $("#digital .successProgress .innerSuccessPanel .progressPanel .successItem .numbers").html(i);
                }
            }
            setInterval(plusNum,100);
        }
    }
    setInterval(numberProg,1);
    
})

// jumping up from footer

$(".sircle").click(function(){
    $("body").animate({
        scrollTop:0
    },1800);
});