const co = document.getElementById("co");
const khong = document.getElementById("khong");
const ans = document.getElementById("ans");

function chooseAcceptFunction() {
    co.innerHTML = "Không";
    khong.innerHTML = "Có";
}

co.addEventListener("focus", chooseAcceptFunction);
co.addEventListener("mouseover", chooseAcceptFunction);

function chooseRejectFunction() {
    khong.innerHTML = "Không";
    co.innerHTML = "Có";
}

khong.addEventListener("focus", chooseRejectFunction);
khong.addEventListener("mouseover", chooseRejectFunction);

function displayAnser() {
    
    ans.style.visibility = "visible";
    khong.style.display = "none";
    co.style.display = "none";
}

co.addEventListener("click", displayAnser);
khong.addEventListener("click", displayAnser);