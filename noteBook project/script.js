

function create() {
  const titleMessage = document.getElementById("title-message");
  const bodyMessage = document.getElementById("note-message");
  const titleValue = titleMessage.value;
  const bodyValue = bodyMessage.value;
  
  if (titleValue || bodyValue) {
        
    let noteInfo = {
      title: titleValue,
      body: bodyValue,
      date: date,
    };

    noteToken.push(noteInfo);
    localStorage.setItem("noteToken", JSON.stringify(noteToken));
    location.reload();
    showNotes();

    closeModal();
    clearModalInput(titleMessage, bodyMessage);
  }
}


document.getElementById("title-message").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    create();
  }
});



function closeModal() {
  const modal = document.getElementById("new-note-modal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal() {
    const modal = document.getElementById("new-note-modal");
    const modalInstance = new bootstrap.Modal(modal); 
    modalInstance.show();
}


function clearModalInput(title, body) {
  title.value = "";
  body.value = "";
}

function showNotes() {
  document.querySelectorAll('.note').forEach( note => note.remove())
    noteToken.forEach((post,index) => {
        let content = `
                <li class="note">
                    <div class="details" onclick="boxId(${index},'${post.title}','${post.body}','${post.date}')">
                        <p>${post.title}</p>
                        <span >${post.body}</span>
                    </div>
                    <div class="bottom-content">
                        <span>${post.date}</span>
                        <div class="settings" id="settings">
                            <i class="fa-solid fa-ellipsis menu-dot" onclick="showMenu(this)"></i>
                            <ul class="menu" id="menu">
                                <li onclick="Edit(${index},'${post.title}','${post.body}')"><i class="fa-solid fa-pen"></i>Edit</li>
                                <li onclick="Delete(${index},'${post.title}','${post.body}')"><i class="fa-solid fa-trash"></i>Delete</li>
                                <li onclick="Read(${index},'${post.title}','${post.body}','${post.date}')"><i class="fa-solid fa-eye"></i>Read</li>
                            </ul>
                        </div>
                    </div>
                </li>`;
        noteContainer.innerHTML += content;
    });
}



function Edit(noteId, title, body) {
   updateModal(noteId,title, body)
}


function updateModal(noteId,title, body) {
    const modal = document.getElementById("update-modal-note");
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    const titleUpdateMessage = document.getElementById("title-update-message");
    const bodyUpdateMessage = document.getElementById("note-update-message");
    titleUpdateMessage.value = title
    bodyUpdateMessage.value = body
    is_update = true
    updateId = noteId
}


function closeUpdateModal() {
  const modal = document.getElementById("update-modal-note");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}




function update(){
   let noteToken = JSON.parse(localStorage.getItem('noteToken'));
   const titleUpdateMessage = document.getElementById("title-update-message");
   const bodyUpdateMessage = document.getElementById("note-update-message");

    let noteInfo = {
      title: titleUpdateMessage.value,
      body: bodyUpdateMessage.value,
      date: date,
    };

    noteToken[updateId]= noteInfo
    localStorage.setItem("noteToken", JSON.stringify(noteToken));
    closeUpdateModal()
    location.reload()
}



document.getElementById("title-update-message").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    update();
  }
});





function Delete(noteId,title, body) {
  //  for trying ≥
  let noteInfo = {
    title: title,
    body: body,
    date: date,
  };
  historyToken.push(noteInfo);
  localStorage.setItem("historyToken", JSON.stringify(historyToken));

  noteToken.splice(noteId, 1);
  localStorage.setItem("noteToken", JSON.stringify(noteToken));
  location.reload()

}

showNotes();



const wordsNoteContainer = document.querySelector(".words-note-container");

if (AllNotes === 0) {
  wordsNoteContainer.classList.add("showWord");
} else {
  wordsNoteContainer.classList.remove("showWord");
  wordsNoteContainer.classList.add("hideWord");
}