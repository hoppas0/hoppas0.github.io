flag1=0
function mybutton() {
	var x=document.getElementById("password").value;
    var m1 = document.getElementById('img1');
    var m2 = document.getElementById('img2');
    h = document.getElementById("h1");
    if (x == ".") {
        alert("正确");
        if (flag1 == 0) {
            m1.src = "3.png";
            m2.src = "4.png";
            h.innerHTML="Marisa";
            flag1 = 1;
        } else {
            m1.src = "1.png";
            m2.src = "2.jpg";
            h.innerHTML="Miku";
            flag1 = 0;
        }
	}
}