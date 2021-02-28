//get today's date displayed at the bottom of the jumbotron
let rightNow = moment().format("dddd, MMMM Do");
let todaysDate = document.querySelector("#currentDay");
todaysDate.append(rightNow);

let schedule = {};
let index = 0;

let textArea = document.querySelector(".col-10");
let blockHour = document.querySelector(".hour");

let createSchedule = function(index, updatedText) {
    schedule[index].push = updatedText;
    saveSchedule();
    loadSchedule();
    console.log(schedule);
}

let loadSchedule = function(index, updatedText) {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    $.each(schedule, function(list, arr) {
        //console.log(list, arr);
        createSchedule(index, updatedText);
    })
}

let saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

let changeColor = function(textArea, blockHour) {
    $(textArea).removeClass("past present future");
    //let blockHour = $(textArea).find("p").text().trim();
    //let blockHour = moment(blockHour, "hA");
    if (moment().isSame(blockHour, "hour")) {
        $(textArea).find("textarea").addClass("present");
    } else if (moment().isBefore(blockHour, "hour")) {
        $(textArea).find("textarea").addClass("future");
    } else if (moment().isAfter(blockHour, "hour")) {
        $(textArea).find("textarea").addClass("past");
    }
}

$(".saveBtn").click(function() {
    let updatedText = $(this).closest(".row").find("textarea").val().trim();
    let index = $(this).closest(".row").find("textarea").data().id;
    schedule[index] = updatedText;
    createSchedule(index, updatedText);
})

changeColor();

//loadSchedule();