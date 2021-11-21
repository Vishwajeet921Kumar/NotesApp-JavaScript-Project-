let addTitle = document.getElementById("note-title");
let addBtn = document.getElementById("addBtn");
let addTxt = document.getElementById("addTxt");

// If user adds a note , add it to the local Storage
addBtn.addEventListener("click", () => {
  if (addTitle.value == "" || addTxt.value == "") {
    alert("Please enter the title and details");
  }
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTitle.value = "";
  addTxt.value = "";

  showNotes();
});
// Function to show notes
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="card note-card my-2 mx-2" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">Note ${index + 1}</h5>
          <h6 class="card-title id="eTitle" >${element.title}</h6>
         <p class="card-text id="eText">${element.text}</p>
         <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
       </div>
     </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "No Notes Yet! Add a note first.";
  }
}
showNotes();

//Function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// Searching notes

  let search = document.getElementById("searchText");
  search.addEventListener("input",()=>{
      let inputVal = search.value;
      let cardBox = document.getElementsByClassName("note-card");
      Array.from(cardBox).forEach((element) => {
     let eTitle = element.getElementsByTagName("h6")[0].innerText;
     let eText = element.getElementsByTagName("p")[0].innerText;
     if (eTitle.includes(inputVal)||eText.includes(inputVal)) {
         element.style.display = "block";
        } else {
          element.style.display = "none";
        }

      })
  })


