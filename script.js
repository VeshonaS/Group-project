$(".Unreasonable-Warranted-B").click(function() {
    let name = $(".Unreasonable-Warranted-input").val();
    let email = $(".Unreasonable-Warranted-input2").val();
    $(".Unreasonable-Warranted").append(`<p>Hello ${name} you will be sent info about Unreasonable Warranted relating to Police Brutality to your email ( ${email} ). Thank you for signing this petition and taking a stand for the rights we were promise  </p>`);
});
$(".Racial-Profiling-B").click(function() {
    let name = $(".Racial-Profiling-input").val();
    let email = $(".Racial-Profiling-input2").val();
    $(".Racial-Profiling").append(`<p>Hello ${name} you will be sent info about Racial-Profiling relating to Police Brutality to your email ( ${email} ). Thank you for signing this petition and taking a stand for the rights we were promise  </p>`);
});
$(".Physical-Harassment-B").click(function() {
    let name = $(".Physical-Harassment-input").val();
    let email = $(".Physical-Harassment-input2").val();
    $(".Physical-Harassment").append(`<p>Hello ${name} you will be sent info about Physical Harassment relating to Police Brutality to your email ( ${email} ). Thank you for signing this petition and taking a stand for the rights we were promise  </p>`);
});

$(".Comment-B").click(function() {
    let usercommet = $(".Comment").val();
    let username = $(".username").val();
    $(".comment").append(`<p> ${username}:${usercommet} </p>`);
});
$(".suggest-B").click(function() {
    let usersuggest = $(".user-suggest").val();
    let username2 = $(".suggest-username").val();
    $(".suggest").append(`<p> ${username2} suggests- ${usersuggest} </p>`);
});

$(".Whole-new-page").click(function() {
    $("h1,h3,.see,h4,ul,button,img,input,div").hide("");
    $("#turn-off-button").hide();
    $(".hide").show();
    $("#nexttask").show("");
    $("#nexttask2").show("");
    $(".heading").show("");
    $("#back-button").show("");
    $(".for-the-sec-page").show("");

    $("body").css("background-colingor", "#030b14");
});

$("#back-button").click(function() {
    $(".hide").hide();
    $("#nexttask").hide("");
    $("h1,h3,.see,h4,ul,button,img,input,div").show("");
    $("#back-button").hide("");
    $(".for-the-sec-page").hide("");
    $(".also-have-to-be-in-the-sec-page").hide("");
    $("#survey").hide();
    $("body").css("background-color", "#030b14");

});

//////
$(".Submit").click(function() {
    let answer1 = $(".your-name").val();
    let answer2 = $(".User-age").val();


    $(".questions").append(`<p>Thank You for taking our Survey ${answer1} and we hope to stay in contact with you  </p>`);
});

$(".Yes2").click(function() {
    $(".Yes-input1").show();
});
$(".Yes").click(function() {
    $(".Yes-input2").show();
});
$(".No").click(function() {
    $(".Yes-input1,.Yes-input2").hide();
});
$(".sure").click(function() {
    $(".User-contact").show();
});

$(".nope").click(function() {
    $(".User-contact").hide();
});
$("#turn-on-button").click(function() {
    $("#survey").show();
    $("#turn-off-button").show();
    $("body").css("background-color", "#030b14");

});


$("#turn-off-button").click(function() {
    $("#survey").hide();
    $("#turn-off-button").hide();

});