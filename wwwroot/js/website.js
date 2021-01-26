

$(document).ready(function () {
    // moves between the pages
    $(function(){
        $("#navbar-placeholder").load('navbar.html');
    });
    $(document).on("click","#info",function(){
        $('main').load('info.html');
    });
    $(document).on("click","#details",function(){
        $('main').load('details.html');
    });
    $(document).on("click","#book",function(){
        $('main').load('book.html');
    });
    $(document).on("click","#report",function(){
        $('main').load('report.html');
    });
    $(document).on("click","#home",function(){
        $('main').load('index.html');
    });
    $(document).on("click","#info1",function(){
        $('main').load('info.html');
    });
    $(document).on("click","#staffDetails",function(){
        $('main').load('staff.html');
    });
    $(document).on("click","#homebtn",function(){
        $('main').load('index.html');
    });

 

    // if you press yes or no on the report page
    $(document).on("click","#yesbtn",function(){
        $('main').load('yes.html');
    });
    $(document).on("click","#nobtn",function(){
        $('main').load('no.html');
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

// login
function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "user" && form.pswrd.value == "password")
  {
    $('main').load('staffview.html');/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}


