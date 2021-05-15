const url = "https://localhost:44302/api/data/"

window.onload = () => {


    //const saveBtn = document.getElementById("tableBooking");
    //saveBtn.addEventListener("click", (e) => {
    $(document).on("click", "#select2", function () {
        // This will prevent the page from refreshing when you click submit
        e.preventDefault();

        postData().then(function () {
            document.querySelector("tableBooking").reset();
            fetchData();
        }).catch(function () {
        })



    })
}

    $(document).ready(function () {
        // moves between the pages
        $(function () {
            $("#navbar-placeholder").load('navbar.html');
        });
        $(document).on("click", "#info", function () {
            $('main').load('info.html');
        });
        $(document).on("click", "#details", function () {
            $('main').load('details.html');
        });
        $(document).on("click", "#book", function () {
            $('main').load('book.html');
        });
        $(document).on("click", "#report", function () {
            $('main').load('report.html');
        });
        $(document).on("click", "#home", function () {
            $('main').load('index.html');
        });
        $(document).on("click", "#info1", function () {
            $('main').load('info.html');
        });
        $(document).on("click", "#staffDetails", function () {
            $('main').load('staff.html');
        });
        $(document).on("click", "#homebtn", function () {
            $('main').load('index.html');
        });
        $(document).on("click", "#table", function () {
            $('main').load('table.html');
        });
        // if you press yes or no on the report page
        $(document).on("click", "#yesbtn", function () {
            $('main').load('yes.html');
        });
        $(document).on("click", "#nobtn", function () {
            $('main').load('no.html');
        });
    });


        // login
    function check(form)/*function to check userid & password*/ {
            /*the following code checkes whether the entered userid and password are matching*/
            if (form.userid.value == "user" && form.pswrd.value == "password") {
                $('main').load('staffview.html');/*opens the target page while Id & password matches*/
            }
            else {
                alert("Error Password or Username")/*displays error message*/
            }
    };

   
    async function fetchData() {
        const raw = await fetch(url);
        const data = await raw.json();
        console.table(data);
        const table = document.createElement("table");
        table.innerHTML = "<tr><th>First Name</th><th>Last Name</th></tr>";
        doccument.getElementById("test1").appendChild(table);
    };

    async function postData() {
        const form = document.getElementById("tableBooking");
        const fname = form.elements["forename"].value;
        const lname = form.elements["lastame"].value;
        console.log({ fname, lname });
        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        firstName: fname,
                        lastName: lname
                    }
                )
            });
        }
        catch (e) {
            throw "Failed to post";
        }
        return;
    }
