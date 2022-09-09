console.log("JS working !!!");
// let form = document.getElementById("addForm");
let anilist = document.getElementById("animes");
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems);
let animes = [
  {
    sno: 1,
    name: "One Piece",
    status: "Watching",
    score: 5,
  },
];

function deleteAnime(i) {
  if (confirm("Are You Sure?")) {
    animes.splice(i, 1);
    listAnimes();
  }
}

function editAnime(i) {
  animes[i] = {
    sno: animes[i].sno,
    name: document.getElementById("name").value,
    status: document.getElementById("status").value,
    score: document.getElementById("score").value,
  };
  listAnimes();
}

function filterItems(i) {
  var text = i.target.value.toLowerCase();
  console.log(text);

  var itemName = animes.name;
  if (itemName.toLowerCase().indexOf(text) != -1) {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

function listAnimes() {
  anilist.innerHTML = "";
  for (let i = 0; i < animes.length; i++) {
    // console.log(animeArray[2]);
    anilist.innerHTML += `
      <tr id="a${animes[i].sno}">
        <td>${animes[i].sno}</td>
        <td>${animes[i].name}</td>
        <td>${animes[i].status}</td>
        <td>${animes[i].score}</td>
        <td>
          <button class="btn btn-danger" onClick="deleteAnime(${i})"><i class="bi bi-trash3-fill"></i></button>
          <button class="btn btn-warning" onClick="editAnime(${i})"><i class="bi bi-pencil-fill"></i></button>
        </td>
      </tr>
    `;
  }
}

listAnimes();

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  animes.push({
    sno: animes.length + 1,
    name: document.getElementById("name").value,
    status: document.getElementById("status").value,
    score: document.getElementById("score").value,
  });
  listAnimes();
});
