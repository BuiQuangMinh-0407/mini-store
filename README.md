# 🛍️ TAMTHAITU - Mini Store

Dự án bài tập **Năm Hai** — Xây dựng trang cửa hàng thời trang mini có giỏ hàng.

🔗 **Link xem trực tiếp:** [BuiQuangMinh-0407/mini-store](https://github.com/BuiQuangMinh-0407/mini-store)

---

## 👥 Thành viên nhóm

| Tên | GitHub | Phụ trách |
|-----|--------|-----------|
| Bùi Quang Minh | [@BuiQuangMinh-0407](https://github.com/BuiQuangMinh-0407) | Giao diện, CSS |
| Hoàng Sơn | — | Hiển thị sản phẩm |
| Lê Trung | — | Giỏ hàng, tính tiền |

---

## 🚀 Cách chạy dự án

> Không cần cài gì thêm — chỉ cần mở file HTML là xong!

```bash
# Clone về máy
git clone https://github.com/BuiQuangMinh-0407/mini-store.git

# Mở file
cd mini-store
# Double click vào index.html hoặc mở bằng trình duyệt
```

---

## 📁 Cấu trúc file

```
mini-store/
├── index.html      # Cấu trúc trang chính
├── style.css       # Toàn bộ CSS giao diện
├── products.js     # Danh sách sản phẩm
├── cart.js         # Logic giỏ hàng (thêm, xóa, tính tiền)
└── app.js          # Render giao diện, xử lý sự kiện
```

---

## ✅ Chức năng

- 🛒 Thêm sản phẩm vào giỏ hàng
- 🔢 Tăng / giảm số lượng, xóa sản phẩm
- 💰 Tính tổng tiền tự động
- 🏷️ Lọc theo tab: Tất cả · Hàng mới về · Hàng giảm giá
- 📱 Responsive trên mobile

---

## 🌿 Cách tạo Pull Request (cho thành viên nhóm)

### Bước 1 — Fork repo về tài khoản của bạn
> Nhấn nút **Fork** ở góc trên phải trang GitHub

### Bước 2 — Clone fork về máy
```bash
git clone https://github.com/<ten-ban>/mini-store.git
cd mini-store
```

### Bước 3 — Tạo branch mới theo tên tính năng
```bash
git checkout -b tinh-nang/ten-tinh-nang
# Ví dụ: git checkout -b tinh-nang/them-san-pham
```

### Bước 4 — Code xong thì commit
```bash
git add .
git commit -m "feat: mo ta ngan gon tinh nang ban vua lam"
git push origin tinh-nang/ten-tinh-nang
```

### Bước 5 — Tạo Pull Request
> Vào trang GitHub của bạn → nhấn **"Compare & pull request"** → điền mô tả → nhấn **"Create pull request"**

---

## 📋 Quy tắc commit

| Prefix | Dùng khi |
|--------|----------|
| `feat:` | Thêm tính năng mới |
| `fix:` | Sửa lỗi |
| `style:` | Thay đổi CSS, giao diện |
| `docs:` | Cập nhật tài liệu |
| `chore:` | Dọn dẹp code |

---

## 🏫 Thông tin bài tập

**Đề:** Xây dựng một trang cửa hàng mini (Mini Store) có giỏ hàng

**Chấm điểm (9đ):**
- Thêm giỏ + hiển thị giỏ hàng: **2đ**
- Tính đúng tổng tiền: **2đ**
- Code JavaScript rõ ràng: **1đ**
- Có branch theo tính năng: **1.5đ**
- Merge + resolve conflict: **1.5đ**
- Cả nhóm đều có commit: **1đ**
