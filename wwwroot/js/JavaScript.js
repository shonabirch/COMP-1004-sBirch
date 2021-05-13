const url = "https://localhost:44302/index.html/api/data"

window.onload = () => {
    M.Tabs.init(doccument.querySelector(".tabs"))
};

async function fetchData() {
    const raw = await fetch(url);
}