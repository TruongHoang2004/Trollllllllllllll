const co = document.getElementById("co");
const khong = document.getElementById("khong");

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