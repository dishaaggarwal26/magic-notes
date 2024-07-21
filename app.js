let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {

    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) { notesobj = [] }
    else {
        notesobj = JSON.parse(notes)
    }

    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));

    console.log(notesobj);
    shownote();
})

function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) { notesobj = [] }
    else {
        notesobj = JSON.parse(notes)
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="notecard card mx-2 my-2" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onClick="deletenote(this.id)" class="btn btn-primary">delete note</button>
        </div>
    </div>`
    });

    let noteselm = document.getElementById("notes")
    if (noteselm.length != 0) {
        noteselm.innerHTML = html;
    }
    else { noteselm.innerHTML = "please add a note above there is nothing to show"; }
}

function deletenote(index){
    console.log("i m deleting note ", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) { notesobj = [] }
    else {
        notesobj = JSON.parse(notes)
    }

    notesobj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownote();
}

let search= document.getElementById("searchtext");
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText;
        if(cardtext.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})