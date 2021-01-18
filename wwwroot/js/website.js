

$(document).ready(function () {
    $('#home').click(function () {
        $('main').load('index.html');
    })
    $('#report').click(function () {
        $('main').load('report.html');
    })
    $('#book').click(function () {
        $('main').load('book.html');
    })
    $('#details').click(function () {
        $('main').load('details.html');
    })
    $('#info').click(function () {
        $('main').load('info.html');
    })
    $(document).on("click","#info1",function(){
        $('main').load('info.html');            
    });







    var submit = document.getElementById("submit");

    $(document).on("click","#submit2",function(){
    var fname = document.getElementById("forename").value;
    var lname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pnumber").value;

    


    document.getElementById("outfname").innerText= fname
    document.getElementById("outlname").innerText= lname
    document.getElementById("outemail").innerText= email
    document.getElementById("outnumber").innerText= phone
    
    
    })
});





