var date = moment().format('dddd,MMM,Do YYYY')
// console.log(date)
$("#currentDay").text(date);

// loads DOM then executes function
$(document).ready(function () {
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id")
        console.log($(this).parent().attr("id"))
        var task = $(this).siblings(".description").val()
        // console.log(task)
        localStorage.setItem(time, task)
    })

});
var loadTasks = function() {
    $("#9am .description").val(localStorage.getItem("9am"))
    $("#10am .description").val(localStorage.getItem("10am"))
    $("#11am .description").val(localStorage.getItem("11am"))
    $("#12pm .description").val(localStorage.getItem("12pm"))
    $("#1pm .description").val(localStorage.getItem("1pm"))
    $("#2pmm .description").val(localStorage.getItem("2pm"))
    $("#3pm .description").val(localStorage.getItem("3pm"))
    $("#4pm .description").val(localStorage.getItem("4pm"))
    $("#5pm .description").val(localStorage.getItem("5pm"))
    
        }

    
    // var time = localStorage.key(0);
    // console.log(time)

loadTasks()