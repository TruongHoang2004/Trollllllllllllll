const co = document.getElementById("co");
const khong = document.getElementById("khong");

co.addEventListener("mouseover", function() {
    //  // Lấy chiều rộng và chiều cao của cửa sổ trình duyệt
    //  const windowWidth = window.innerWidth;
    //  const windowHeight = window.innerHeight;

    //  // Lấy chiều rộng và chiều cao của nút
    //  const buttonWidth = lan.offsetWidth;
    //  const buttonHeight = lan.offsetHeight;

    //  // Tạo giá trị ngẫu nhiên cho top và left, đảm bảo nút không vượt ra ngoài cửa sổ
    //  const randomTop = Math.random() * (windowHeight - buttonHeight);
    //  const randomLeft = Math.random() * (windowWidth - buttonWidth);

    //  // Thay đổi vị trí của nút
    //  lan.style.top = `${randomTop}px`;
    //  lan.style.left = `${randomLeft}px`;
    co.innerHTML = "Không";
    khong.innerHTML = "Có";
});

khong.addEventListener("mouseover", function() {
    co.innerHTML = "Có";
    khong.innerHTML = "Không";
});