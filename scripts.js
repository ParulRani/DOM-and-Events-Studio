// Write your JavaScript code here.
function init() {

    const takeOff_button = document.getElementById("takeoff");
    takeOff_button.addEventListener("click", takeOffButtonClicked)
    const land_button = document.getElementById("landing");
    land_button.addEventListener("click", landButtonClicked);
    const abortMission_button = document.getElementById("missionAbort");
    abortMission_button.addEventListener("click", abortMissionButtonClicked);
    const up_button = document.getElementById("Up");
    up_button.addEventListener("click", upButtonClicked);
    const down_button = document.getElementById("Down");
    down_button.addEventListener("click", downButtonClicked);
    const right_button = document.getElementById("Right");
    right_button.addEventListener("click", rightButtonClicked);
    const left_button = document.getElementById("Left");
    left_button.addEventListener("click", leftButtonClicked);

}
function takeOffButtonClicked() {
    let check = confirm("Confirm that the shuttle is ready for takeoff");
    if (check) {
        const flight_stats = document.getElementById("flightStatus");
        flight_stats.innerHTML = "Shuttle in flight";
        const shuttle_background = document.getElementById("shuttleBackground");
        shuttle_background.style.backgroundColor = "blue";
        const shuttle_height = document.getElementById("spaceShuttleHeight");
        shuttle_height.innerHTML = "10,000";
    }
}
function landButtonClicked() {
    let alert_var = alert("The shuttle is landing. Landing gear engaged.");
    const flight_stats = document.getElementById("flightStatus");
    flight_stats.innerHTML = "The shuttle has landed.";
    const shuttle_background = document.getElementById("shuttleBackground");
    shuttle_background.style.backgroundColor = "green";
    const shuttle_height = document.getElementById("spaceShuttleHeight");
    shuttle_height.innerHTML = "0";

}
function abortMissionButtonClicked() {
    let check = confirm("Confirm that you want to abort the mission.");
    if (check) {
        const flight_stats = document.getElementById("flightStatus");
        flight_stats.innerHTML = "Mission aborted.";
        const shuttle_background = document.getElementById("shuttleBackground");
        shuttle_background.style.backgroundColor = "green";
        const shuttle_height = document.getElementById("spaceShuttleHeight");
        shuttle_height.innerHTML = "0";
    }
}
function upButtonClicked() {

    const shuttle_height = document.getElementById("shuttleBackground");
    shuttle_height.style.top = "-10px";

}
function downButtonClicked() {
    const shuttle_height = document.getElementById("shuttleBackground");
    shuttle_height.style.top = "10px";
}
function rightButtonClicked() {
    const shuttle_height = document.getElementById("shuttleBackground");
    shuttle_height.style.left = "10px";

}
function leftButtonClicked() {
    const shuttle_height = document.getElementById("shuttleBackground");
    shuttle_height.style.left = "-10px";

}
window.addEventListener("load", init);
// Remember to pay attention to page loading!