//get today's date displayed at the bottom of the jumbotron
let rightNow = moment().format("dddd, MMMM Do");
let todaysDate = document.querySelector("#currentDay");
todaysDate.append(rightNow);


let textArea = $("textarea");
let schedule = [];


//i need to select an element and change the color when a certain condition is met
let checkTime = function() {
    let currentTime = moment().format('H');
    
    for (let i = 0; i < textArea.length; i++) {
        let elementId = textArea[i].id;

        let textId = document.getElementById(textArea[i].id);

        $(textArea[i].id).removeClass(".past .present .future");

        if (elementId < currentTime) {
            $(textId).addClass("past");
        } else if (elementId > currentTime) {
            $(textId).addClass("future");
        } else if (elementId === currentTime) {
            $(textId).addClass("present")
        }
    }
}

setInterval(checkTime(), (1000 * 60));



//I need to have information saved to local storage
$(".saveBtn").on("click", function() {
    let updatedText = $(this).closest(".row").find("textarea").val();
    let index = document.getElementById(textArea.id);
    newSchedule = {
        scheduleIndex: index,
        scheduleText: updatedText
    }

    schedule = [...schedule, newSchedule];
    
    localStorage.setItem("schedule", JSON.stringify(schedule));
    console.log(schedule);
    loadSchedule();
})



//when the page is refreshed, it needs to load the saved localstorage
let loadSchedule = function() {
    let savedSchedule = localStorage.getItem("schedule");
    schedule = JSON.parse(savedSchedule);
    //schedule[index] = updatedText;
}





//let blockHour = document.querySelector(".hour");

/*let createSchedule = function(index, updatedText) {
    schedule[index].push = updatedText;
    saveSchedule();
    loadSchedule();
    console.log(schedule);
}

let loadSchedule = function(index, updatedText) {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    $.each(schedule, function() {
        arr.forEach(function(schedule) {
            createSchedule(index, updatedText);
        })
    })
}

let saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

let changeColor = function(textArea, blockHour) {
    $(textArea).removeClass("past present future");
    //let blockHour = $(textArea).find("p").text().trim();
    //let blockHour = moment(blockHour, "hA");
    if (moment().isSame(blockHour.val, "hour")) {
        $(textArea).find("textarea").addClass("present");
    } else if (moment().isBefore(blockHour.val, "hour")) {
        $(textArea).find("textarea").addClass("future");
    } else if (moment().isAfter(blockHour.val, "hour")) {
        $(textArea).find("textarea").addClass("past");
    }
}

$(".saveBtn").click(function() {
    let updatedText = $(this).closest(".row").find("textarea").val().trim();
    let index = $(this).closest(".row").find("textarea").data().id;
    schedule[index] = updatedText;
    createSchedule(index, updatedText);
})

changeColor(textArea, blockHour);

//loadSchedule();
*/