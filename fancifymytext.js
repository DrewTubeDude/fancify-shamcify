function enlarge() {
    document.getElementById("text").style.fontSize = "2em";
}
function fancyAlert() {
    alert("Wow it just got fancy in here!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}
function boringAlert() {
    alert("Hmm. Very boring indeed.");
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}
function cowMode() {
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("text").value = str;
}
