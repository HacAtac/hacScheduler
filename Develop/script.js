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


// When i refresh page input is still there

//listen to all save buttons
var userSaves;
if (JSON.parse(localStorage.getItem("userInput"))) {
    userSaves = JSON.parse(localStorage.getItem("userInput"))
    console.log("userInput",Object.keys(userSaves));
    
}else {
    userSaves = {
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
        seventeen,
    }
}


    //event listener for #saveBtn on click
$(".saveBtn").on("click", function(event){
    //console.log(userSaves.eight);
    userSaves[event.target.value] = $("#" + event.target.value).val()
    console.log(userSaves);
    //JSON.stringify to make object of array "userSaves" in a string and saves in local storage
    localStorage.setItem("userInput",JSON.stringify(userSaves));
    
})






