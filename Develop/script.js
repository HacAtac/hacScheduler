//grabs from moment.js
var currentDay = moment().format('dddd MMMM do YYYY');
// calls the current day moment variable
$("#currentDay").text(currentDay);

//When I view time blocks they need to be color-coded for past,present,future
function whatTime() {
    //var to hold the current hour using moment.js to retrieve
    //Need moment.js to get current hour moment().hour();
    var currentTime = moment().hours();
    console.log(currentTime);
    //need to loop over the blocks to figure out and choose if past present future
    //targets the block class in html then loops over the blocks to check hour
    //need to loop over time blocks and check with conditional if < or = if, else if, if
    $(".time-block").each(function(){
        var thisHour = parseInt($(this).attr("id"));
        console.log(thisHour);

        if (thisHour > currentTime) {
            $(this).addClass("future");
        
        }else if (thisHour === currentTime){
            $(this).addClass("present");
            
        }else {
            $(this).addClass("past");
            
        }
    })
   
};
whatTime();
//When I click the save button it saves it in local storage
//Posibly jQuery event listener in a function and then save timeInput/userInput in local storage

$(".saveBtn").on("click", function() {
    var userInput = $(this).siblings(".description").val();
    var timeInput = $(this).parent().attr("id");
    localStorage.setItem(timeInput, userInput);
});
//When I refresh the page the saved events are still there
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));



