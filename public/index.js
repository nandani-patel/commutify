const modal = document.getElementById('modal');
const check = document.getElementById('check');

check.addEventListener("mouseenter", function zoomin(){
    document.getElementById('modal').style.height="500px";
    document.getElementById('modal').style.width="21.5%";
});

check.addEventListener("mouseleave", function zoomout(){
    document.getElementById('modal').style.height="450px";
    document.getElementById('modal').style.width="20%";
});
