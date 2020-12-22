var name = prompt("PLEASE ENTER YOUR NAME")
var d = document.createElement("marquee")
var b = document.getElementsByTagName("h2")
d.textContent = name + " " + "welcome to my tip calculator";

b[0].appendChild(d)

function calculate() {

    var bil = Number(document.getElementById("bill").value)
    var service = Number(document.getElementById("service").value)
    var members = Number(document.getElementById("totpeople").value)

    if (bil == " " || service == 0) {
        alert("please write value in bil and service");
        return;
    }

    if (members == 0) {
        alert("ATLEAST MEMBER SHOULD BE 1")
    }


    if (members >= 1) {
        var total = (bil * service) / members
        total = total.toFixed(2)
        document.getElementById("span1").innerHTML = "tip per person is Rs" + " " + total
        document.getElementById("final").innerHTML = "Totall tip per person is Rs" + " " + total
    }

}