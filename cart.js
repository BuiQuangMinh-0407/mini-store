// cart.js
// Xử lý chức năng giỏ hàng

// Mảng lưu các sản phẩm trong giỏ hàng
var gioHang = [];

// Thêm sản phẩm vào giỏ hàng
function themVaoGio(id) {
    // Tìm sản phẩm theo id
    var sanPham = danhSachSanPham.find(function(sp) {
        return sp.id === id;
    });

    if (!sanPham) return;

    // Kiểm tra xem sản phẩm đã có trong giỏ chưa
    var itemCuoi = gioHang.find(function(item) {
        return item.id === id;
    });

    if (itemCuoi) {
        // Nếu đã có thì tăng số lượng lên 1
        itemCuoi.soLuong += 1;
    } else {
        // Nếu chưa có thì thêm mới vào giỏ
        gioHang.push({
            id: sanPham.id,
            ten: sanPham.ten,
            gia: sanPham.gia,
            hinh: sanPham.hinh,
            soLuong: 1
        });
    }

    // Cập nhật lại giao diện
    capNhatBadge();
    renderGioHang();
    hienToast("Đã thêm \"" + sanPham.ten + "\" vào giỏ!");
}

// Tăng số lượng sản phẩm trong giỏ
function tangSoLuong(id) {
    var item = gioHang.find(function(i) { return i.id === id; });
    if (item) {
        item.soLuong += 1;
        capNhatBadge();
        renderGioHang();
    }
}

// Giảm số lượng sản phẩm trong giỏ
function giamSoLuong(id) {
    var item = gioHang.find(function(i) { return i.id === id; });
    if (item) {
        item.soLuong -= 1;
        // Nếu số lượng về 0 thì xóa khỏi giỏ
        if (item.soLuong <= 0) {
            xoaKhoiGio(id);
            return;
        }
        capNhatBadge();
        renderGioHang();
    }
}

// Xóa một sản phẩm khỏi giỏ hàng
function xoaKhoiGio(id) {
    gioHang = gioHang.filter(function(item) {
        return item.id !== id;
    });
    capNhatBadge();
    renderGioHang();
}

// Tính tổng tiền
function tinhTongTien() {
    var tong = 0;
    for (var i = 0; i < gioHang.length; i++) {
        tong += gioHang[i].gia * gioHang[i].soLuong;
    }
    return tong;
}

// Định dạng tiền tệ VNĐ
function dinhDangTien(so) {
    return so.toLocaleString('vi-VN') + ' đ';
}

// Cập nhật số lượng hiển thị trên badge
function capNhatBadge() {
    var tongSoLuong = 0;
    for (var i = 0; i < gioHang.length; i++) {
        tongSoLuong += gioHang[i].soLuong;
    }
    document.getElementById('so-luong-badge').textContent = tongSoLuong;
}

// Xóa toàn bộ giỏ hàng
function xoaGio() {
    if (gioHang.length === 0) {
        alert('Giỏ hàng đang trống!');
        return;
    }
    if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng không?')) {
        gioHang = [];
        capNhatBadge();
        renderGioHang();
    }
}

// Thanh toán
function thanhToan() {
    if (gioHang.length === 0) {
        alert('Giỏ hàng đang trống, hãy chọn sản phẩm trước!');
        return;
    }
    var tong = tinhTongTien();
    alert('✅ Đặt hàng thành công!\nTổng tiền: ' + dinhDangTien(tong) + '\nCảm ơn bạn đã mua hàng! 🎉');
    gioHang = [];
    capNhatBadge();
    renderGioHang();
    dongGioHang();
}
