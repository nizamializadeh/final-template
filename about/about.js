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