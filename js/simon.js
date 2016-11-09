function powerOn() {
    $("#powerOn").on("click", function() {
        if (power === "off") {
            $("#buttonOn").css("visibility", "visible");
            $("#buttonOff").css("visibility", "hidden");
            $("#displayText").css("opacity", "1");
            power = "on";
        }
        else if (power === "on") {
            $("#buttonOn").css("visibility", "hidden");
            $("#buttonOff").css("visibility", "visible");
            $("#displayText").css("opacity", "0.3");
            power = "off";

function powerOff() {
    $("#powerOff").on("click", function() {
        if (power === "off") {
            $("#buttonOff").css("visibility", "visible");
            $("#buttonOn").css("visibility", "hidden");
            $("#displayText").css("opacity", "1");
            power = "on";
        }
        else if (power === "on") {
            $("#buttonOff").css("visibility", "hidden");
            $("#buttonOn").css("visibility", "visible");
            $("#displayText").css("opacity", "0.3");
            power = "off";
}

function startGame() {

function restartGame() {

}
function gamePattern() {

}
function userInput() {

}
function keepingScore() {

}
