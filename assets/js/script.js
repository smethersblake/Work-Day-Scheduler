var date = moment().format('dddd,MMM,Do YYYY')
// console.log(date)
$("#currentDay").text(date);
// exicutes code after the document is loaded
$(document).ready(function () {
    // sets varibles for a loop and to set the key for the input to be saved to localStorage
    for(var i = 9; i < 18; i++) {
        var timeStamp = i
        var timeOfDay = 'am'
        if(i >= 13){
            timeStamp = timeStamp - 12
            timeOfDay = 'pm'
        }
        // creates html elements timebox and the hour class
            const timeBox = $(`<div class="row time-block" id="${i}"></div>`)
            const hour = $(`<div class="hour col-1 pt-4">${timeStamp + timeOfDay}</div><textarea class="description col-10"></textarea><button class="saveBtn col-1"><i class="oi oi-file"></i></button>`)
            $(timeBox).append(hour)
            $(".container").append(timeBox)
    }
    // function for the save buttons to save the input to the hour key to retreave later
        $(".saveBtn").on("click", function(){
            var time = $(this).parent().attr("id")
            console.log($(this).parent().attr("id"))
            var task = $(this).siblings(".description").val()
            console.log(task)
            localStorage.setItem(time, task)
        })
        // function to retreve saved data from local storage
    var loadTasks = function() {
        $("#9 .description").val(localStorage.getItem("9"))
        $("#10 .description").val(localStorage.getItem("10"))
        $("#11 .description").val(localStorage.getItem("11"))
        $("#12 .description").val(localStorage.getItem("12"))
        $("#13 .description").val(localStorage.getItem("13"))
        $("#14 .description").val(localStorage.getItem("14"))
        $("#15 .description").val(localStorage.getItem("15"))
        $("#16 .description").val(localStorage.getItem("16"))
        $("#17 .description").val(localStorage.getItem("17"))
    }
    // gets current time to tell the time box to be differnt colors depending on the time it is currently
    var timeStatus = function() {
    var currentTime = moment().hour()
    console.log(currentTime)
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr('id'))
        if (timeBlock === currentTime) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
        }
        else if(timeBlock < currentTime) {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
        
        console.log(timeBlock)
    });
    }
    timeStatus()
    // re runs the timeStatus function every 30 mins
    setInterval(function() {
    timeStatus()
    console.log("hello")
    }, (1000 * 60) * 30);
    loadTasks()
});