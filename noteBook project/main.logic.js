const addBox = document.getElementById("add-box");
const settings = document.getElementById("settings");
const noteContainer = document.getElementById("note-container");

const historyToken = JSON.parse(localStorage.getItem("historyToken") || "[]");
const noteToken = JSON.parse(localStorage.getItem("noteToken") || "[]");

const countOfAllNotes = document.getElementById("count-of-note-allNotes");
const countOfHistory = document.getElementById("count-of-note-history");
let AllNotes = noteToken.length;
countOfAllNotes.textContent = AllNotes;
let history = historyToken.length;
countOfHistory.textContent = history;

let is_update = false, updateId;

let now = new Date();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonthIndex = now.getMonth();
let currentMonthName = monthNames[currentMonthIndex];
let date = currentMonthName + " " + now.getDate() + ", " + now.getFullYear();


function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}


function Read(noteId, title, body, date) {
  console.log(historyToken);
  const modal = document.getElementById("read-modal");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
  document.getElementById("read-mode").innerHTML = `
      <form style="cursor: text;">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label" style="cursor: text;  font-size: 20px; font-weight: bolder; overflow-wrap: anywhere;">${title}</label>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label" style="cursor: text;overflow-wrap: anywhere;">${body}</label>
          </div>
           <div class="mb-3">
            <label for="message-text" class="col-form-label" style="cursor: text; color:gray; font-size:13px;">${date}</label>
          </div>
        </form>
      `;
}

function historyLink() {
  window.location = "history.html";
}

function allNotesLink() {
  window.location = "index.html";
}

function Back(noteId,title, body) {
    let noteInfo = {
      title: title,
      body: body,
      date: date,
    };
    noteToken.push(noteInfo);
    localStorage.setItem("noteToken", JSON.stringify(noteToken));

  historyToken.splice(noteId, 1);
  localStorage.setItem("historyToken", JSON.stringify(historyToken));
  location.reload();
}

function boxId(id, title, body, date) {
  Read(id, title, body, date);
}



function toDoList(){
  window.location= "mylist.html"
}
function notes(){
  window.location= "index.html"
}
