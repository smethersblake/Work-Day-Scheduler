var date = moment().format('dddd,MMM,Do YYYY')
// console.log(date)
$("#currentDay").text(date);
// loads DOM then executes function
// $(document).ready(function () {
//     $(".saveBtn").on("click", function(){
//         var time = $(this).parent().attr("id")
//         // console.log($(this).parent().attr("id"))
//         var task = $(this).siblings(".description").val()
//         // console.log(task)
//         localStorage.setItem(time, task)
//     })
// });
// var loadTasks = function() {
//     $("#9 .description").val(localStorage.getItem("9"))
//     $("#10 .description").val(localStorage.getItem("10"))
//     $("#11 .description").val(localStorage.getItem("11"))
//     $("#12 .description").val(localStorage.getItem("12"))
//     $("#13 .description").val(localStorage.getItem("13"))
//     $("#14 .description").val(localStorage.getItem("14"))
//     $("#15 .description").val(localStorage.getItem("15"))
//     $("#16 .description").val(localStorage.getItem("16"))
//     $("#17 .description").val(localStorage.getItem("17"))
    
// }

// var timeStatus = function() {
//     var currentTime = moment().hour()
//     console.log(currentTime)
//     $(".time-block").each(function(){
//         var timeBlock = parseInt($(this).attr('id'))
//         if (timeBlock === currentTime) {
//             $(this).removeClass("past")
//             $(this).removeClass("future")
//             $(this).addClass("present")
//         }
//         else if(timeBlock < currentTime) {
//             $(this).removeClass("future")
//             $(this).removeClass("present")
//             $(this).addClass("past")
//         }
//         else {
//             $(this).removeClass("past")
//             $(this).removeClass("present")
//             $(this).addClass("future")
//         }
        
//         console.log(timeBlock)
//     });
// }
// timeStatus()
// setInterval(function() {
//     timeStatus()
//     console.log("hello")
// }, (1000 * 60) * 30);
// loadTasks()

$(document).ready(function () {
    for(var i = 9; i < 18; i++) {
        var timeStamp = i
        var timeOfDay = 'am'
        if(i >= 13){
            timeStamp = timeStamp - 12
            timeOfDay = 'pm'
        }
        // if(i >= 13){
        //     i = i - 12
        //     console.log("NOIPE")
            const timeBox = $(`<div class="row time-block" id="${i}"></div>`)
            const hour = $(`<div class="hour col-1">${timeStamp + timeOfDay}</div><textarea class="description col-10"></textarea><button class="saveBtn col-1"></button>`)
            // const textArea = $(`<textarea class="description col-10"></textarea>`) 
            // const saveBtn = $(`<button class="saveBtn col-1"></button></button>`)
            $(".container").append(timeBox)
            $(timeBox).append(hour)
            // $(timeBox).append(textArea)
            // $(timeBox).append(saveBtn)
        // }
    }
        $(".saveBtn").on("click", function(){
            var time = $(this).parent().attr("id")
            console.log($(this).parent().attr("id"))
            var task = $(this).siblings(".description").val()
            console.log(task)
            localStorage.setItem(time, task)
        })
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
    setInterval(function() {
    timeStatus()
    console.log("hello")
}, (1000 * 60) * 30);
    loadTasks()
});