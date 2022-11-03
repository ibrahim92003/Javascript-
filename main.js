function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "270px";

}
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "50px";
}
function toggle() {
    var button = document.getElementById("mysection");
    document.getElementById("btn").innerHTML = "close section";
    if (button.style.display === "none") {
        button.style.display = "block";
    }
    else {
        document.getElementById("btn").innerHTML = "open section";
        button.style.display = "none";
    }
}

function average() {
    var num1 = 1,
        num2 = 2,
        num3 = 3,
        num4 = 4,
        num5 = 5,
        num6 = 6,
        num7 = 7,
        num8 = 8, 
        num9 = 9, 
        num10 = 10;

        sumplus =num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;

        sumavrage = sumplus / 10 ;
        
        document.getElementById("avrrage").innerHTML=`avrage is : ${sumavrage}`;
}

average();

function togglecolor() {
    var Body = document.body;
    Body.classList.toggle("darkmode");
}