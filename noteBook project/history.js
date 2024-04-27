
historyToken.forEach( (note,index) =>{
    let content = `
                <li class="note">
                    <div class="details" onclick="boxId(${index},'${note.title}','${note.body}','${note.date}')">
                        <p>${note.title}</p>
                        <span>${note.body}</span>
                    </div>
                    <div class="bottom-content">
                        <span>${note.date}</span>
                        <div class="settings" id="settings">
                            <i class="fa-solid fa-ellipsis menu-dot" onclick="showMenu(this)"></i>
                            <ul class="menu" id="menu">
                                <li onclick="Back(${index},'${note.title}','${note.body}')"><i class="fa-solid fa-rotate-left"></i>Back</li>
                                <li onclick="Delete(${index})"><i class="fa-solid fa-trash"></i>Delete</li>
                                <li onclick="Read(${index},'${note.title}','${note.body}','${note.date}')"><i class="fa-solid fa-eye"></i>Read</li>
                            </ul>
                        </div>
                    </div>
                </li>`;
    noteContainer.innerHTML += content;
})

function Delete(noteId) {
  historyToken.splice(noteId, 1);
  localStorage.setItem("historyToken", JSON.stringify(historyToken));
  location.reload();
}


const wordsNoteContainer = document.querySelector(".words-note-container");

if (history === 0) {
  wordsNoteContainer.classList.add("showWord");
} else {
  wordsNoteContainer.classList.remove("showWord");
  wordsNoteContainer.classList.add("hideWord");
}