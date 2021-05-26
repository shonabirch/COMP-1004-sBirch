

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

        $(document).on("click", "#book", () => {
            $("main").load("book.html", () => {
                console.log(document.querySelector('#submit2'))
                $(document).on("click", "#submit2", (e) => {
                    e.preventDefault();
                    alert("Thank you for booking with us!");

                    postData().then(function () {
                        document.querySelector("tableBooking").reset();
                        fetchData();
                    }).catch(function () {
                    })
                })
            })
        })
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
                $("main").load("yes.html", () => {
                console.log(document.querySelector('#submit3'))
                $(document).on("click", "#submit3", (e) => {
                    e.preventDefault();
                    alert("Thank you for reporting your positive COVID case with us");

                    postData2().then(function () {
                        document.querySelector("yesform").reset();
                        fetchData2();
                    }).catch(function () {
                    })
                })
            })
        });
        $(document).on("click", "#nobtn", function () {
            $('main').load('no.html');
        });
    });


        // login
async function check(form)/*function to check userid & password*/ {
    /*the following code checkes whether the entered userid and password are matching*/
    $(document).on("click", "#login", () => {
        if (form.userid.value == "user" && form.pswrd.value == "password") {
            $("main").load("staffview.html", () => {
                console.log(document.querySelector('#login'))

                writeData();

                writeData2();

            })

        }
        else {
            alert("Error Password or Username")/*displays error message*/
        }
    })

    };

   
async function fetchData() {
        const url = "https://localhost:44302/api/data/"
        const raw = await fetch(url);
        const data = await raw.json();
        console.table(data);
        const table = document.createElement("table");
        table.innerHTML = "<tr><th>First Name</th><th>Last Name</th></tr>";
        doccument.getElementById("tableBooking").appendChild(table);
    };

    async function postData() {
        const url = "https://localhost:44302/api/data/"
        const fname = (document.getElementById("forename").value)
        const lname = (document.getElementById("lastname").value)
        const email = (document.getElementById("email").value)
        const pNumber = (document.getElementById("pnumber").value)
        const date = (document.getElementById("date").value)
        const time = (document.getElementById("time").value)
        const people = (document.getElementById("people").value)
        console.log({ fname, lname, email, pNumber, date, time, people });
        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        firstName: fname,
                        lastName: lname,
                        email: email,
                        pNumber: pNumber,
                        date: date,
                        time: time,
                        people: people
                    }
                )
            });
        }
        catch (e) {
            throw "Failed to post";
        }
        return;
    }


async function writeData() {
    const url = "https://localhost:44302/api/data/"
    const raw = await fetch(url);
    const data = await raw.json();

    console.table(data);
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>First name</th><th>Last Name        </th><th>Email</td><th>Phone Number</td><th>Date</td<th>Time</td><th>    Number of People</td><th>Delete</td></tr>";
    data.forEach(({ firstName, lastName, email, pNumber, date, time, people, id }) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${email}</td><td>${pNumber}</td><td>${date}</td><td>${time}</td><td>${people}</td><td><a id="delete" class="btn btn-dark btn-lg" onclick="deleteId(${id})" >Delete</a>`;
        table.appendChild(row);
    })
    const div = document.getElementById("test1");
    div.replaceChild(table, div.childNodes[0]);
}


async function deleteId(id) {
    try {
        const url = "https://localhost:44302/api/data"
        await fetch(url + "/" + id, {
            method: "DELETE",
        });
        alert("Deleted")
        fetchData();
    } catch (e) {
        alert("error")
    }
}




///////////////////For COVID reporting
async function fetchData2() {
    const url = "https://localhost:44302/api/covid/"
    const raw = await fetch(url);
    const data2 = await raw.json();
    console.table(data2);
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>First Name</th><th>Last Name</th></tr>";
    doccument.getElementById("yesform").appendChild(table);
};

async function postData2() {
    const url = "https://localhost:44302/api/covid/"
    const fname2 = (document.getElementById("forename2").value)
    const lname2 = (document.getElementById("lastname2").value)
    console.log({ fname2, lname2 });
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName2: fname2,
                    lastName2: lname2,
                }
            )
        });
    }
    catch (e) {
        throw "Failed to post";
    }
    return;
}

async function writeData2() {
    const url = "https://localhost:44302/api/covid/"
    const raw = await fetch(url);
    const data = await raw.json();

    console.table(data);
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>First name</th><th>Last Name</th></tr>";
    data.forEach(({ firstName2, lastName2, id2 }) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${firstName2}</td><td>${lastName2}</td><td><a id="delete" class="btn btn-dark btn-lg" onclick="deleteId2(${id2})" >Delete</a>`;
        table.appendChild(row);
    })
    const div = document.getElementById("covidtable");
    div.replaceChild(table, div.childNodes[0]);
}

async function deleteId2(id2) {
    try {
        const url = "https://localhost:44302/api/covid"
        await fetch(url + "/" + id2, {
            method: "DELETE",
        });
        alert("Deleted")
        fetchData2();
    } catch (e) {
        alert("error")
    }
}