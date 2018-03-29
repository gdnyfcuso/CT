$(document).ready(function () {
    RegitClass();
    RegitSumit();
    
});

function RegitSumit()
{
    $("#mySubmit").click(function (event) {
        var userName = $("#UserName").val();

        var password = $("#Password").val();
        
        $.Ajax.post("Account/Login", { userName: userName, password :password}, function (result) {
            window.location = result;
        });

    });
}

function RegitClass()
{
    $('.forgot-pass').click(function (event) {
        $(".pr-wrap").toggleClass("show-pass-reset");
    });
    $('.pass-reset-submit').click(function (event) {
        $(".pr-wrap").removeClass("show-pass-reset");
    });
}