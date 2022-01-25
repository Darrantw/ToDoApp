
const noteFormButton = document.getElementById('openCreateNoteForm')
const newNote = document.getElementById('CreateNoteButton');
const newNoteTitle = document.getElementById('note-title');
const newNoteDescription = document.getElementById('note-description');
const newNoteCategory = document.getElementById('note-category');
const newNoteDeadline = document.getElementById('note-deadline');
const errorMessage = document.getElementById('error-message');
const title = document.getElementById('calendar-title');
const createNoteForm = document.getElementById('noteForm');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thuday', 'Friday', 'Saturday', 'Sunday']
const hideCalendarBtn = document.getElementById('hide-calendar');
const calendarContainer = document.querySelector('.calendar-container');
let mainContentDivs = document.querySelectorAll('.main-content');
const noteFormContainer = document.getElementById('Note');
const todayBtn = document.getElementById('today-btn');
const todayContainer = document.getElementById('Today');
let active = 'default';
console.log(active);
const sidebarItems = document.querySelectorAll('.sidebar-item');
console.log(sidebarItems)

// const contentarea = document.getElementById('content-area');
// contentarea.style.display = 'grid';
// contentarea.style.gridArea

sidebarItems.forEach(item => item.addEventListener("click", (e) => {
  // console.log(e.target.innerHTML, active);
  console.log(e.target.innerHTML);
  if (active === e.target.innerHTML) {
    document.getElementById(`${e.target.innerHTML}`).classList.toggle('unhidden');
    active = 'default';
    console.log('I just unclicked myself. The screen should be blank');
  } else if (active === "default") {
    console.log('active was default so I should display something new now');
    document.getElementById(`${e.target.innerHTML}`).classList.toggle('unhidden');
    active = e.target.innerHTML
  } else {
    console.log('hmmmm')
    for (let i = 0; i < mainContentDivs.length; i++) {
      if (active == mainContentDivs[i].id) {
        mainContentDivs[i].classList.toggle('unhidden');
      }
    }
    console.log(e.target.innerHTML)
    console.log('this should have one content area replacing another')
    document.getElementById(`${e.target.innerHTML}`).classList.toggle('unhidden');
    active = e.target.innerHTML;
    console.log(active);
  }
}))


// IF IT DOESN'T WORK, UNCOMMENT THE BELOW THREE LINES.
// todayBtn.onclick = function() {
//   todayContainer.classList.toggle('unhidden');
//   console.log('problem')
  // if (active == undefined) {
  //   active = todayBtn.innerHTML;
  //   console.log(active);
  // } else if (active == this.innerHTML) {
  //   console.log('diggidy');
  //   active = 'fun';
  // } else {
  //   for (let i = 0; i < mainContentDivs.length; i++) {
  //     console.log(mainContentDivs[i].childNodes[1].innerHTML)
    // } AND UNCOMMENT THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  // }

  // todayContainer.style.gridArea = 'myContent';
  // console.log(e.target);
// }

// console.log(mainContentDivs)

hideCalendarBtn.onclick = function() {
  // calendarContainer.classList.toggle('unhidden');
}
// let modalNoteButton = document.createElement('button');
// modalNoteButton.innerHTML = '+';
const container = document.querySelector('.modal-container');

const modal = document.querySelector('.modal');
// const daySquare = document.createElement('div');

// some problems with this
const noteDelete = document.createElement('button');
         noteDelete.innerHTML = 'X';
         noteDelete.onclick = function() {
           console.log(notes)
           console.log(`${this.parentNode.childNodes[0]}`)
           console.log(`this should be the top line of text in the modal: ${this.parentNode.childNodes[0].innerHTML}`)
           notes = notes.filter(note => (note.title != this.parentNode.childNodes[0].innerHTML) && (note.deadline == this.parentNode.childNodes[this.childNodes.length -2]))
           console.log(notes)
           modalClose();
           console.log(notes[0])
           console.log(`this is ${this.innerHTML} and this is this's parent ${this.parentNode.innerHTML}`);
           console.log(this.parentNode.childNodes[2].innerHTML);
           let date = this.parentNode.childNodes[2].innerHTML.slice(8, 10)
           console.log(date)
           calendarNoteRemove(date);
          //  for (let i = 0; i < modal.childNodes.length; i++) {
          //    console.log(`node ${i}`)
          //  }
           modal.removeChild(modal.childNodes[3]);
           modal.removeChild(modal.childNodes[2]);
           modal.removeChild(modal.childNodes[1]);
           modal.removeChild(modal.childNodes[0]);
         }
        //  Some problems with this as well
         function calendarNoteRemove(date) {
           console.log(`calendarNoteRemove called with this date: ${date}`)
          const daySquares = document.querySelectorAll('.day-square');
          let paddedDaySquares = []
          for (let i = 0; i < 9; i++) {
            paddedDaySquares.push(datePadder(daySquares[i].innerHTML))
          };
          for (let i = 9; i < daySquares.length; i++) {
            paddedDaySquares.push(daySquares[i].innerHTML);
          }
          // console.log(paddedDaySquares)
          let myDisplayMonth = datePadder(displayMonth);
          // console.log(myDisplayMonth);
          // console.log(paddedDaySquares);
          for (let i = 0; i < daySquares.length; i++) {
            // console.log(paddedDaySquares[i].slice(0,2));
            if (date == paddedDaySquares[i].slice(0,2)) {
              console.log('ching ching!');
              daySquares[i].innerHTML = date;
            }
          }
         }

window.onload = load;

let displayMonth = 0;

function load() {
  const date = new Date();

  if (displayMonth !== 0) {
    date.setMonth(new Date().getMonth() + displayMonth)
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear()
  
  
  const firstDayOfMonth = new Date(year, month, 1);
  // console.log(firstDayOfMonth);
  const daysInMonth = new Date(year, month +1, 0).getDate();
  console.log(daysInMonth);
  console.log(month);
  const dateString = firstDayOfMonth.toLocaleDateString('ict', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
   let chunk = `${date.toLocaleDateString('ict', {month: '2-digit'})} ${year}`;
  title.innerHTML = `${date.toLocaleDateString('ict', {month: 'long'})} ${year}`;
  console.log(dateString);
  let paddingdays = days.indexOf(dateString.split(', ')[0]);
  const calendarDOM = document.getElementById('calendarDOM');

  calendarDOM.innerHTML = '';

  for (let i = 1; i <= paddingdays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    // daySquare();
    if (i > paddingdays) {
      daySquare.classList.add('day-square');
      daySquare.innerText = i - paddingdays;
    } else {
      daySquare.classList.add('padding-square');
    }
    calendarDOM.appendChild(daySquare);
    const daySquares = document.querySelectorAll('.day-square');
    daySquares.forEach(function(daySquare) {
        daySquare.addEventListener('click', function() {
            let clickedYear = firstDayOfMonth.toLocaleDateString('ict', {year: 'numeric'});
            let clickedMonth = firstDayOfMonth.toLocaleDateString('ict',{month: 'numeric'}) 
            let clickedDay = this.innerHTML;
            let clickedDate = clickedYear + '-' + datePadder(clickedMonth) + '-' + datePadder(clickedDay);
            for (i = 0; i < notes.length; i++) {
              if (clickedDate === notes[i].deadline) {
                let calendarNote = document.createElement('div');
                calendarNote.innerText = notes[i].title;
                daySquare.appendChild(calendarNote);
                // The above needs to work the other way; so on the creation of every note it checks for a matching date on the current daySquares. and everytime user changes month it scans through notes array for dates matching daySquares.
                console.log('FART')
              }
            }
          })
        });
      }
    };

      
    

  // for (i = 0; i < notes.length; i++) {
  //   if (notes[i])
  // // }
  // let chunk = `${date.toLocaleDateString('ict', {month: '2-digit'})} ${year}`;
  // title.innerHTML = `${date.toLocaleDateString('ict', {month: 'long'})} ${year}`;

 function initButtons() {
  document.getElementById('next').addEventListener('click', () => {
    displayMonth++;
    // console.log(displayMonth)
    load();
    addNoteToCalendar();
  });
  document.getElementById('prev').addEventListener('click', () => {
    displayMonth--;
    // console.log(displayMonth)
    load();
    addNoteToCalendar();
 })
};

 initButtons();

// const noteFactory = (title, description, category, deadline) => {

// }




function Note (title, description, category, deadline) {
  this.title = title;
  this.description = description;
  this.category = category;
  this.deadline = deadline;
}

let notes = [];


// noteFormButton.onclick = function () {
//   noteFormContainer.classList.toggle('unhidden');
// // console.log(createNoteForm.classList);
// // load();
// };

newNote.onclick = function () {
  if (newNoteTitle.value.length < 3) {
    errorMessage.innerHTML = 'type at least 3 characters for a title';
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("error");
  } else {
  const note = new Note(newNoteTitle.value, newNoteDescription.value, newNoteCategory.value, newNoteDeadline.value);
  notes.push(note);
  console.log(notes);
  console.log(newNoteTitle.value);
  addNoteToCalendar();
};
};


function addNoteToCalendar() {
  const daySquares = document.querySelectorAll('.day-square');
  let paddedDaySquares = []
  for (let i = 0; i < 9; i++) {
    paddedDaySquares.push(datePadder(daySquares[i].innerHTML))
  };
  for (let i = 9; i < daySquares.length; i++) {
    paddedDaySquares.push(daySquares[i].innerHTML);
  }
  // console.log(paddedDaySquares)
  let myDisplayMonth = datePadder(displayMonth);
  for (let i = 0; i < notes.length; i++) {
    let noteMonth = notes[i].deadline.slice(5,7);
    let noteDay = notes[i].deadline.slice(8,10);
    // console.log(noteMonth);
    // console.log(noteDay);
    // console.log(myDisplayMonth);
    let currentMonth = monthConverter(title.innerHTML);
    // console.log(currentMonth);
    let calendarNote = document.createElement('div');
                calendarNote.innerText = notes[i].title;
    for (let j = 0; j < daySquares.length; j++) {
     if (noteMonth === currentMonth) {
      //  console.log(noteDay, daySquares[j].innerHTML);
       let paddedDay = datePadder(daySquares[j].innerHTML)
      //  console.log(paddedDay);
       if (noteDay == paddedDaySquares[j]) {
         daySquares[j].appendChild(calendarNote);
         let modalNoteButton = document.createElement('button');
         modalNoteButton.innerText = '+';
         daySquares[j].appendChild(modalNoteButton);
         let noteTitle = document.createElement('div')
         noteTitle.innerHTML = notes[i].title;
         let noteDesc = document.createElement('div');
         noteDesc.innerHTML = notes[i].description;
         let noteDeadline = document.createElement('div'); 
         noteDeadline.innerHTML = notes[i].deadline;
        //  const noteDelete = document.createElement('button');
        //  noteDelete.innerHTML = 'X';
         modalNoteButton.onclick = function() {
         modal.appendChild(noteTitle);
         modal.appendChild(noteDesc);
         modal.appendChild(noteDeadline);
         modal.appendChild(noteDelete);
         modalOpen();
         };
        //  console.log('day working');
       }
     } 
    }
  }
}



// modalNoteButton.onclick = function() {
//   modalOpen();
// } 

function modalOpen() {
  container.classList.remove('hidden');
};

function modalClose() {
  container.classList.add('hidden');
}

function datePadder (date) {
  if (date.length !== 2) {
    date = "0" + date;
  } return date;
}

function monthConverter (month) {
  let trimmedMonth = month.substring(0, month.length - 5)
  switch (trimmedMonth) {
    case "January": 
      trimmedMonth = "01";
      break;
    case "February": 
      trimmedMonth = "02";
      break;
    case "March":
      trimmedMonth = "03";
      break;
    case "April": 
      trimmedMonth = "04";
      break;
    case "May": 
      trimmedMonth = "05";
      break;
    case "June": 
      trimmedMonth = "06";
      break;
    case "July": 
      trimmedMonth = "07";
      break;
    case "August": 
      trimmedMonth = "08";
      break;
    case "September": 
      trimmedMonth = "09";
      break;
    case "October": 
      trimmedMonth = "10";
      break;
    case "November": 
      trimmedMonth = "11";
      break;
    case "December": 
      trimmedMonth = "12";
    }
    return trimmedMonth
  }




