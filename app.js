// app.js
// Render giao dien TAMTHAITU

var tabHienTai = 'tat-ca';
var soHienThi = 8;

// Render san pham theo tab
function renderSanPham(tab) {
    var container = document.getElementById('danh-sach-san-pham');
    container.innerHTML = '';

    var ds = danhSachSanPham.filter(function(sp) {
        if (tab === 'tat-ca') return true;
        if (tab === 'moi') return sp.moi === true;
        if (tab === 'sale') return sp.sale === true;
        return true;
    });

    var hienThi = ds.slice(0, soHienThi);

    hienThi.forEach(function(sp) {
        var phanTram = '';
        if (sp.giaCu) {
            phanTram = Math.round((1 - sp.gia / sp.giaCu) * 100);
        }

        var badgeHTML = sp.giaCu
            ? '<div class="discount-badge">-' + phanTram + '%</div>'
            : (sp.moi ? '<div class="discount-badge" style="background:#555">NEW</div>' : '');

        var giaOldHTML = sp.giaCu
            ? '<span class="price-old">' + dinhDangTien(sp.giaCu) + '</span>'
            : '';

        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML =
            '<div class="product-img-wrap">' +
                '<img src="' + sp.hinh + '" alt="' + sp.ten + '" loading="lazy" onerror="this.src=\'https://via.placeholder.com/400x533?text=No+Image\'">' +
                badgeHTML +
                '<button class="btn-add-hover" onclick="event.stopPropagation(); themVaoGio(' + sp.id + ')">+ THÊM VÀO GIỎ HÀNG</button>' +
            '</div>' +
            '<p class="product-name">' + sp.ten + '</p>' +
            '<div class="product-prices">' +
                '<span class="price-sale">' + dinhDangTien(sp.gia) + '</span>' +
                giaOldHTML +
            '</div>';

        container.appendChild(card);
    });

    // An/hien nut xem them
    var btnXemThem = document.getElementById('btn-xem-them');
    if (soHienThi >= ds.length) {
        btnXemThem.style.display = 'none';
    } else {
        btnXemThem.style.display = 'inline-block';
    }
}

// Doi tab
function doiTab(el, tab) {
    document.querySelectorAll('.tab').forEach(function(t) {
        t.classList.remove('active');
    });
    el.classList.add('active');
    tabHienTai = tab;
    soHienThi = 8;
    renderSanPham(tab);
}

// Loc theo loai (click category card)
function locTheoLoai(loai) {
    document.getElementById('san-pham').scrollIntoView({ behavior: 'smooth' });
    tabHienTai = 'tat-ca';
    soHienThi = 8;
    document.querySelectorAll('.tab').forEach(function(t) {
        t.classList.remove('active');
    });
    document.querySelector('.tab').classList.add('active');
    renderSanPham('tat-ca');
}

// Xem them
function xemThem() {
    soHienThi += 4;
    renderSanPham(tabHienTai);
}

// Mo gio hang
function moGioHang() {
    document.getElementById('gio-hang').classList.add('mo');
    document.getElementById('gio-hang-overlay').classList.add('hien');
    document.body.style.overflow = 'hidden';
}

// Dong gio hang
function dongGioHang() {
    document.getElementById('gio-hang').classList.remove('mo');
    document.getElementById('gio-hang-overlay').classList.remove('hien');
    document.body.style.overflow = '';
}

// Render gio hang
function renderGioHang() {
    var container = document.getElementById('danh-sach-gio');
    var tongTienEl = document.getElementById('tong-tien');

    if (gioHang.length === 0) {
        container.innerHTML = '<p class="trong-gio">🛒 Giỏ hàng đang trống<br><small>Hãy thêm sản phẩm vào giỏ hàng nhé!</small></p>';
        tongTienEl.textContent = '0 đ';
        return;
    }

    var html = '';
    gioHang.forEach(function(item) {
        html +=
            '<div class="item-gio">' +
                '<img src="' + item.hinh + '" alt="' + item.ten + '">' +
                '<div class="item-gio-info">' +
                    '<p>' + item.ten + '</p>' +
                    '<p class="gia-item">' + dinhDangTien(item.gia) + '</p>' +
                    '<div class="dieu-chinh-sl">' +
                        '<button onclick="giamSoLuong(' + item.id + ')">−</button>' +
                        '<span>' + item.soLuong + '</span>' +
                        '<button onclick="tangSoLuong(' + item.id + ')">+</button>' +
                    '</div>' +
                '</div>' +
                '<button class="btn-xoa-item" onclick="xoaKhoiGio(' + item.id + ')" title="Xóa">✕</button>' +
            '</div>';
    });

    container.innerHTML = html;
    tongTienEl.textContent = dinhDangTien(tinhTongTien());
}

// Hien toast
function hienToast(noiDung) {
    var toast = document.getElementById('toast');
    toast.textContent = noiDung;
    toast.classList.add('hien');
    setTimeout(function() {
        toast.classList.remove('hien');
    }, 2000);
}

// Khoi chay
window.onload = function() {
    renderSanPham('tat-ca');
    renderGioHang();
};
