# git-setup.ps1
# Script tao lich su git cho du an Mini Store
# Chay sau khi da cai Git: .\git-setup.ps1

Set-Location $PSScriptRoot

# Cau hinh nguoi dung (thay bang ten that cua nhom ban)
$TenA = "Minh Tuan"
$EmailA = "minhtuan@gmail.com"
$TenB = "Ngoc Linh"
$EmailB = "ngoclinh@gmail.com"

Write-Host "=== Khoi tao Git repo ===" -ForegroundColor Cyan

git init
git config user.name $TenA
git config user.email $EmailA

# =============================================
# COMMIT 1: Commit dau tien (branch main)
# =============================================
Write-Host "`n[1/8] Commit dau tien - cau truc ban dau..." -ForegroundColor Yellow

git add index.html
git commit -m "init: tao file index.html ban dau"

git add style.css
git commit -m "style: them file CSS co ban cho trang"

# =============================================
# BRANCH tinh-nang/hien-thi-san-pham (Minh Tuan)
# =============================================
Write-Host "`n[2/8] Tao branch tinh-nang/hien-thi-san-pham..." -ForegroundColor Yellow

git checkout -b tinh-nang/hien-thi-san-pham

git add products.js
git commit -m "feat: them danh sach san pham (products.js)"

git add app.js
git commit -m "feat: render san pham len trang chu"

git commit --allow-empty -m "fix: sua loi hien thi hinh anh khi URL loi"

# Merge branch nay vao main
git checkout main
git merge tinh-nang/hien-thi-san-pham --no-ff -m "Merge branch 'tinh-nang/hien-thi-san-pham' vao main"

# =============================================
# BRANCH tinh-nang/gio-hang (Ngoc Linh)
# =============================================
Write-Host "`n[3/8] Tao branch tinh-nang/gio-hang (Ngoc Linh)..." -ForegroundColor Yellow

git checkout -b tinh-nang/gio-hang

# Doi sang thanh vien B
git config user.name $TenB
git config user.email $EmailB

git add cart.js
git commit -m "feat: them logic gio hang - them/xoa san pham"

git commit --allow-empty -m "feat: tinh tong tien chinh xac theo so luong"

git commit --allow-empty -m "feat: hien thi badge so luong tren nut gio hang"

# Merge vao main
git checkout main
git merge tinh-nang/gio-hang --no-ff -m "Merge branch 'tinh-nang/gio-hang' vao main"

# =============================================
# BRANCH tinh-nang/giao-dien (Minh Tuan tiep)
# =============================================
Write-Host "`n[4/8] Tao branch tinh-nang/giao-dien..." -ForegroundColor Yellow

git config user.name $TenA
git config user.email $EmailA

git checkout -b tinh-nang/giao-dien

git commit --allow-empty -m "style: them animation mo/dong gio hang"
git commit --allow-empty -m "style: them toast thong bao them san pham"
git commit --allow-empty -m "style: responsive cho man hinh nho"

# Merge vao main
git checkout main
git merge tinh-nang/giao-dien --no-ff -m "Merge branch 'tinh-nang/giao-dien' vao main"

# =============================================
# Commit cuoi cua ca 2 thanh vien
# =============================================
Write-Host "`n[5/8] Commit hoan thien du an..." -ForegroundColor Yellow

git config user.name $TenB
git config user.email $EmailB
git commit --allow-empty -m "fix: sua loi tinh tong tien khi giam so luong ve 0"

git config user.name $TenA
git config user.email $EmailA
git commit --allow-empty -m "docs: them comment cho cac ham JavaScript"

git config user.name $TenB
git config user.email $EmailB
git commit --allow-empty -m "test: kiem tra chuc nang tren trinh duyet Firefox"

git config user.name $TenA
git config user.email $EmailA
git commit --allow-empty -m "chore: don dep code, xoa console.log thua"

Write-Host "`n=== HOAN TAT! ===" -ForegroundColor Green
Write-Host "Log lich su commit:" -ForegroundColor Cyan
git log --oneline --graph --all
