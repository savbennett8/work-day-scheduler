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
    let index = $(this).closest(".row").find("textarea").attr('id');

    newSchedule = {
        scheduleIndex: index,
        scheduleText: updatedText
    }

    schedule = [...schedule, newSchedule];
    
    localStorage.setItem("key", JSON.stringify(schedule));;
})



//when the page is refreshed, it needs to load the saved localstorage
let loadSchedule = function() {
    let data = localStorage.getItem("key");
    let retrieveData = JSON.parse(data);

    let index09 = document.getElementById("09");
    let index10 = document.getElementById("10");
    let index11 = document.getElementById("11");
    let index12 = document.getElementById("12");
    let index13 = document.getElementById("13");
    let index14 = document.getElementById("14");
    let index15 = document.getElementById("15");
    let index16 = document.getElementById("16");
    let index17 = document.getElementById("17");
    
    for (let i = 0; i < retrieveData.length; i++) {
        if (retrieveData[i].scheduleIndex === "09") {
            index09.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "10") {
            index10.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "11") {
            index11.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "12") {
            index12.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "13") {
            index13.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "14") {
            index14.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "15") {
            index15.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "16") {
            index16.append(retrieveData[i].scheduleText);
        } 
        else if (retrieveData[i].scheduleIndex === "17") {
            index17.append(retrieveData[i].scheduleText);
        }
    }
    
};


loadSchedule();