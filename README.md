# Thư Viện Số Tiếng Mông

Website thư viện số về ngôn ngữ và văn hóa dân tộc Mông Việt Nam.

## Cấu trúc thư mục

```
├── index.html          Trang chủ
├── thu-vien.html       Thư viện ảnh (29 hình)
├── tai-lieu.html       Tài liệu & bài giảng (6 file)
├── video.html          Video bài học (12 video)
├── css/style.css       Giao diện tùy chỉnh
├── js/main.js          Chức năng gallery
├── docs/               Thư mục chứa tài liệu gốc
├── img/                Thư mục chứa hình ảnh
└── video/              Thư mục chứa video (KHÔNG push lên GitHub)
```

## Hướng dẫn cập nhật nội dung

### Thêm hình ảnh mới

1. Bỏ file ảnh (.jpg, .png) vào thư mục `img/`.
2. Mở file `thu-vien.html`, copy một block sau và dán thêm vào trong `<div class="gallery-grid">`:

```html
<div class="gallery-item" data-bs-toggle="modal" data-bs-target="#galleryModal" data-img-src="img/TEN_FILE.jpg" data-caption="Mô tả ảnh">
  <img src="img/TEN_FILE.jpg" alt="Mô tả ảnh" loading="lazy">
</div>
```

3. Thay `TEN_FILE.jpg` bằng tên file ảnh thật.

### Thêm tài liệu mới

1. Bỏ file tài liệu vào thư mục `docs/`.
2. Mở file `tai-lieu.html`, copy một block card và dán thêm vào nhóm phù hợp.
3. Cập nhật: tên file, tiêu đề, mô tả, kích thước.

### Thêm video mới

1. Upload video lên **YouTube**.
2. Copy **Video ID** (phần sau `v=` trong link YouTube).
3. Mở file `video.html`, copy một block video card.
4. Thay `VIDEO_ID_HERE` bằng Video ID thật trong thuộc tính `data-src`.
5. Đổi `src="about:blank"` thành giá trị `data-src`.

### Cập nhật video có sẵn

Trong file `video.html`, mỗi video có dạng:
```html
<iframe src="about:blank" data-src="https://www.youtube-nocookie.com/embed/VIDEO_ID_HERE" ...></iframe>
```

Thay `VIDEO_ID_HERE` bằng ID thật và đổi `src="about:blank"` thành link YouTube:
```html
<iframe src="https://www.youtube-nocookie.com/embed/abc123xyz" ...></iframe>
```

## Deploy lên GitHub Pages

1. Tạo tài khoản GitHub (nếu chưa có).
2. Tạo repository mới (public), đặt tên `h-mong`.
3. Chạy các lệnh:

```bash
cd d:\h-mong
git init
git add .
git commit -m "Thư viện số Tiếng Mông - phiên bản đầu tiên"
git remote add origin https://github.com/USERNAME/h-mong.git
git push -u origin main
```

4. Vào **Settings > Pages** trên GitHub:
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Nhấn Save

5. Sau 1-2 phút, website sẽ có tại: `https://USERNAME.github.io/h-mong/`

## Tạo mã QR

Sau khi có link website, truy cập trang tạo QR code miễn phí, dán link vào, tải ảnh QR về và lưu vào `img/qr-code.png`.

## Công nghệ sử dụng

- HTML/CSS/JavaScript thuần
- Bootstrap 5.3 (qua CDN)
- Bootstrap Icons (qua CDN)
- Google Fonts - Noto Sans
