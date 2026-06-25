let database = [];

const fileInput =
document.getElementById("fileInput");

const searchBtn =
document.getElementById("searchBtn");

const result =
document.getElementById("result");

fileInput.addEventListener(
"change",
async e=>{

    const file =
    e.target.files[0];

    if(!file) return;

    const text =
    await file.text();

    database =
    JSON.parse(text);

    alert(
    `${database.length} records loaded`
    );
});

searchBtn.addEventListener(
"click",
searchData
);

function searchData(){

    const query =
    document
    .getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

    if(!query) return;

    const user =
    database.find(item =>

        String(item.id)
        .toLowerCase() === query ||

        String(item.username || "")
        .toLowerCase() === query
    );

    if(!user){

        result.innerHTML =
        `
        <div class="notfound">
        No Record Found
        </div>
        `;
        return;
    }

    result.innerHTML =
    `
    <div class="card">

        <div class="row">
            <span class="label">
            ID:
            </span>
            ${user.id}
        </div>

        <div class="row">
            <span class="label">
            Name:
            </span>
            ${user.name}
        </div>

        <div class="row">
            <span class="label">
            Username:
            </span>
            ${user.username}
        </div>

        <div class="row">
            <span class="label">
            Phone:
            </span>
            ${user.phone}
        </div>

    </div>
    `;
}
