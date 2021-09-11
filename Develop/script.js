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

// When i refresh page input is still there
var field8 = document.querySelector("#eight");
field8.value = userSaves.eight;

var field9 = document.querySelector("#nine");
field9.value = userSaves.nine;

var field10 = document.querySelector("#ten");
field10.value = userSaves.ten;

var field11 = document.querySelector("#eleven");
field11.value = userSaves.eleven;

var field12 = document.querySelector("#twelve");
field12.value = userSaves.twelve;

var field13 = document.querySelector("#thirteen");
field13.value = userSaves.thirteen;

var field14 = document.querySelector("#fourteen");
field14.value = userSaves.fourteen;

var field15 = document.querySelector("#fifteen");
field15.value = userSaves.fifteen;

var field16 = document.querySelector("#sixteen");
field16.value = userSaves.sixteen;

var field17 = document.querySelector("#seventeen");
field17.value = userSaves.seventeen;

    //event listener for #saveBtn on click
$(".saveBtn").on("click", function(event){
    //console.log(userSaves.eight);
    userSaves[event.target.value] = $("#" + event.target.value).val()
    console.log(userSaves);
    //JSON.stringify to make object of array "userSaves" in a string and saves in local storage
    localStorage.setItem("userInput",JSON.stringify(userSaves));
    
})






