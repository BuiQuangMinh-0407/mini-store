// app.js
// Khởi tạo và render giao diện chính

// Render danh sách sản phẩm lên trang
function renderSanPham() {
    var container = document.getElementById('danh-sach-san-pham');
    container.innerHTML = '';

    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sp = danhSachSanPham[i];

        var the = document.createElement('div');
        the.className = 'the-san-pham';
        the.innerHTML =
            '<img src="' + sp.hinh + '" alt="' + sp.ten + '" onerror="this.src=\'https://via.placeholder.com/400x170?text=No+Image\'">' +
            '<div class="info-san-pham">' +
                '<h3>' + sp.ten + '</h3>' +
                '<p class="gia">' + dinhDangTien(sp.gia) + '</p>' +
                '<button class="btn-them-gio" onclick="themVaoGio(' + sp.id + ')">+ Thêm vào giỏ</button>' +
            '</div>';

        container.appendChild(the);
    }
}

// Render giỏ hàng
function renderGioHang() {
    var container = document.getElementById('danh-sach-gio');
    var tongTienEl = document.getElementById('tong-tien');

    // Nếu giỏ trống
    if (gioHang.length === 0) {
        container.innerHTML = '<p class="trong-gio">🛒 Giỏ hàng trống<br><small>Hãy thêm sản phẩm vào giỏ nhé!</small></p>';
        tongTienEl.textContent = '0 đ';
        return;
    }

    // Render từng sản phẩm trong giỏ
    var html = '';
    for (var i = 0; i < gioHang.length; i++) {
        var item = gioHang[i];
        html +=
            '<div class="item-gio">' +
                '<img src="' + item.hinh + '" alt="' + item.ten + '">' +
                '<div class="item-gio-info">' +
                    '<p>' + item.ten + '</p>' +
                    '<span>' + dinhDangTien(item.gia) + '</span>' +
                    '<div class="dieu-chinh-sl">' +
                        '<button onclick="giamSoLuong(' + item.id + ')">−</button>' +
                        '<span>' + item.soLuong + '</span>' +
                        '<button onclick="tangSoLuong(' + item.id + ')">+</button>' +
                    '</div>' +
                '</div>' +
                '<button class="btn-xoa-item" onclick="xoaKhoiGio(' + item.id + ')" title="Xóa">🗑</button>' +
            '</div>';
    }

    container.innerHTML = html;

    // Hiển thị tổng tiền
    tongTienEl.textContent = dinhDangTien(tinhTongTien());
}

// Mở giỏ hàng
function moGioHang() {
    document.getElementById('gio-hang').classList.add('mo');
    document.getElementById('gio-hang-overlay').classList.add('hien');
}

// Đóng giỏ hàng
function dongGioHang() {
    document.getElementById('gio-hang').classList.remove('mo');
    document.getElementById('gio-hang-overlay').classList.remove('hien');
}

// Hiển thị thông báo toast
function hienToast(noiDung) {
    // Tạo toast nếu chưa có
    var toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = noiDung;
    toast.classList.add('hien');

    // Ẩn toast sau 2 giây
    setTimeout(function() {
        toast.classList.remove('hien');
    }, 2000);
}

// Khởi chạy khi trang load xong
window.onload = function() {
    renderSanPham();
    renderGioHang();
};
