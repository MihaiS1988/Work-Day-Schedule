$(document).ready(function () {
  let currentDay = $("#currentDay");
  let container = $(".container");
  let button = "<button id='save-button' class='saveBtn  col-2'> <i class='fas fa-save'></i>  </button>";

  

//This function is displaying the current date 
function displayCurrentDay() {
  let today = moment().format('dddd, MMMM Do');
  currentDay.text(today);
}

  displayCurrentDay();




  //This function is creating dynamically the time blocks 
  function showColumns() {

    for (let i = 9; i <= 17; i++) {
      let hour = moment().hour(i).format('h a');
      let inputField = " <input value = ' ' class='input-field textarea inputArea col col-`8` type='text' data-time =" + hour + " >";
      let row = "<div class='row'> <span class='hour  col-2'> " +  hour  +  "</span> "+ inputField + button + "</div>";
      // console.log(`Time: ${hour}`);
      $(row).appendTo(container);
    }

  }

  showColumns();
})

function setPastPresentFuture(){
  // function to format rows depending on whether they are past, present or future
  
  let timeRows = $('.description');
  // use jQuery each to loop through rows
  timeRows.each(function(){
    let currentRowHour = parseInt(currentRow.attr('id'));
    let currentTime = parseInt(moment().format('H'));
    let currentRow = $( this );
  // if else block to check if hour of current row is before, equal to or after the current time
  if(currentRowHour < currentTime){
    currentRow.addClass('past');
    currentRow.removeClass('present');
  } else if (currentRowHour===currentTime) {
    currentRow.addClass('present');
    currentRow.removeClass('future');
  } else {
    currentRow.addClass('future');
  }
  });
}

function saveDetails(event){
  if(event.target.nodeName === 'I'){
    let clickedHour = event.target.getAttribute('data-hour');
    let plannerData = window.localStorage.getItem('plannerData');
    let textToSave = $(clickedHourId).val();
    let clickedHourId = "#" + clickedHour;
    plannerData = JSON.parse(plannerData);
    
    if(!plannerData || plannerData.date!=currentDate.format('DD-MM-YYYY')){
      plannerData = {};
      plannerData.date = currentDate.format('DD-MM-YYYY');
    }
    plannerData[clickedHour] = textToSave;
    window.localStorage.setItem('plannerData', JSON.stringify(plannerData));
  }
}