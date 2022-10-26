// Bt: quản lý tuyển sinh
function quanLy() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuongdt = document.getElementById("doiTuongdt").value * 1;

    var diemMon1 = document.getElementById("diemMon1").value * 1;
    var diemMon2 = document.getElementById("diemMon2").value * 1;
    var diemMon3 = document.getElementById("diemMon3").value * 1;

    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuongdt;
    var result = "";
    if (tongDiem >= diemChuan) {
        if (diemMon1 > 0 || diemMon2 > 0 || diemMon3 > 0) {
            result = "đậu";
        } else {
            result = "rớt";
        }
    } else {
        result = "rớt";
    }
    document.getElementById("infoQuanly").innerHTML = "Bạn đã " + result + ". Tổng điem: " + tongDiem;
}

// bt2: Tính tiền điẹn
function tienDien() {
    var hoVAten = document.getElementById("hoVAten").value;
    var soKw = document.getElementById("soKw").value * 1;
    dongia1 = 500; //50kw đầu
    dongia2 = 650; //50kw tiếp
    dongia3 = 850; //100kw kế tiếp
    dongia4 = 1100; //150kw kế tiếp
    dongia5 = 1300;// còn lại
    var tienDien;
    if (0 < soKw && soKw <= 50) {
        tienDien = dongia1 * soKw;
    } else if (50 < soKw && soKw <= 100) {
        tiendien = dongia1 * 50 + dongia2 * (soKw - 50);
    } else if (100 < soKw && soKw <= 200) {
        tienDien = dongia1 * 50 + dongia2 * 50 + dongia3 * (soKw - 100
        );
    } else if (200 < soKw && so <= 350) {
        tienDien = dongia1 * 50 + dongia2 * 50 + dongia3 * 100 + dongia4 * (soKw - 200);
    } else {
        tienDien = dongia1 * 50 + dongia2 * 50 + dongia3 * 100 + dongia4 * 150 + dongia4 * (so - 350);
    }
    document.getElementById("infoTiendien").innerHTML = "Họ và tên: " + hoVAten + ", tiền điện: " + tienDien;
}





