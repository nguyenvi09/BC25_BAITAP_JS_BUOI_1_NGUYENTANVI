// Bài 1: Tính tền lương nhân viên
/**
 * - Đầu vào: 
 *  tạo biến hằng lưu giá trị mặc định 100000
 *  var soNgayLam lưu giá trị người dùng nhập vào và ép kiểu int
 * 
 * - Xử lý:
 *  tiền lương = số ngày làm x 100000
 * 
 * - Đầu ra: 
 *  kết quả tiền lương
 * 
 */

document.getElementById("tinhLuong").onclick = function() {
    const luong = 100000;
    var soNgayLam = document.getElementById("day").value * 1;

    var tienLuong = luong * soNgayLam;

    document.getElementById("kqTinhLuong").innerHTML = "Tiền lương là: " + tienLuong + " VND";
    document.getElementById("kqTinhLuong").className = "thongBao";
};


// Bài 2: Tính giá trị trung bình
/**
 * Số thực là số có thể biểu diễn trên trục số
 * 
 * - Đầu vào: người dùng nhập vào 5 thực số bất kì
 * 
 * -Xử lý:
 * B1: tạo 5 biến lưu giá trị người dùng nhập vào number_1, number_2,
 * number_3, number_4, number_5 và ép kiểu
 * 
 * B2: tính giá trị trung bình
 * -> var average = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
 * 
 * - Đầu ra: in kết quả
 */

document.getElementById("average").onclick = function() {
    var number_1 = document.getElementById("number_1").value * 1;
    var number_2 = document.getElementById("number_2").value * 1;
    var number_3 = document.getElementById("number_3").value * 1;
    var number_4 = document.getElementById("number_4").value * 1;
    var number_5 = document.getElementById("number_5").value * 1;

    var average = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

    document.getElementById("thongBao").innerHTML = "Trung bình của 5 số là: " + average;
    document.getElementById("thongBao").className = "thongBao";

};

//Bài 3: Quy đổi tiền
/**
 * - Đầu vào: 
 *  tạo const DOLLARPRICE = 23500 
 *  tạo biến dollar lấy giá trị người dùng nhập vào và ép kiểu
 * 
 * - Xử lý:
 * var quyDoi = dollar * DOLLARPRICE
 * 
 * - Đầu ra:
 * Xuất ra kết quả
 * 
 */

document.getElementById("quyDoi").onclick = function() {
    const DOLLAR_PRICE  = 23500;
    var dollar = document.getElementById("dollar").value * 1;

    var quyDoi = dollar * DOLLAR_PRICE;

    document.getElementById("vnd").innerHTML = quyDoi + " VND";
    document.getElementById("vnd").className = "thongBao";

}

/**
 * Bài 4: tính diện tích, chu vi của hình chữ nhật
 * 
 * -Đầu vào: 
 * tạo biến chieuDai, chieuRong, dienTich, chuVi 
 * 
 * -Xử lý: 
 * Lấy giá trị người dùng nhập vào lưu biến chieuDai, chieuRong
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2;
 * 
 * -Đầu ra:
 * Xuất kết quả dt cv ra màn hình
 * 
 */


document.getElementById("dienTich").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    var dienTich = chieuDai * chieuRong;

    document.getElementById("kqDienTich").innerHTML = "Diện tích là: " + dienTich;
    document.getElementById("kqDienTich").className = "thongBao";

}

document.getElementById("chuVi").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    var chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById("kqChuVi").innerHTML = "Chu vi là: " + chuVi;
    document.getElementById("kqChuVi").className = "thongBao";

}

/**
 * Bài 5: Tính tổng 2 ký số
 * -Đầu vào: 
 * Tạo biến so lưu giá trị người dùng nhập vào và ép kiểu
 * tạo biến soHangDonVi , soHangChuc
 * 
 * -Xử lý:
 * 
 * soHangDonVi = Math.floor(so %  10) ;
 * soHangChuc = so / 10;
 * 
 * var tong2KySo = soHangDonVi + soHangChuc;
 * 
 *-Đầu ra:  xuất kết quả ra màn hình
 */

 document.getElementById("so").style.width = "250px";

 document.getElementById("tong2KySo").onclick = function(){
    var so = document.getElementById("so").value *1;
    var soHangDonVi =  Math.floor(so % 10);
    var soHangChuc = Math.floor( so / 10);

    var tong2KySo = soHangDonVi + soHangChuc;

     document.getElementById("kqTong2KySo").innerHTML = "Tổng 2 ký số là: " + tong2KySo;
    document.getElementById("kqTong2KySo").className = "thongBao";

 }

