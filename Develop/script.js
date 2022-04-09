var date = moment().format('dddd,MMM,Do YYYY')
// console.log(date)
$("#currentDay").text(date);
// loads DOM then executes function
$(document).ready(function () {
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id")
        // console.log($(this).parent().attr("id"))
        var task = $(this).siblings(".description").val()
        // console.log(task)
        localStorage.setItem(time, task)
    })
});
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


// var time = localStorage.key(0);
// console.log(time)
var timeStatus = function() {
    var currentTime = moment().hour()
    console.log(currentTime)
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr('id'))
        if (timeBlock === currentTime) {
            $(this).addClass("present")
        }
        
        console.log(timeBlock)
    });
}


timeStatus()
loadTasks()