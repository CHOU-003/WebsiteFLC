# Freelancer-UI

## Giới thiệu

`freelancer-ui` là một bộ khung giao diện người dùng (UI) linh hoạt, được thiết kế để tăng tốc quá trình phát triển ứng dụng cho freelancer. Sử dụng React cùng với một loạt các thư viện thành phần UI, `freelancer-ui` cung cấp một nền tảng mạnh mẽ và dễ dàng tùy chỉnh để đáp ứng các yêu cầu đa dạng của dự án bạn.

## Tính năng

- **Dựa trên React**: Cung cấp hiệu suất cao và quản lý trạng thái mạnh mẽ.
- **Thư viện thành phần**: Tích hợp sẵn với `@zegocloud/zego-uikit-prebuilt`, `react-dropzone`, `react-quill`, `react-select`, và nhiều thư viện khác.
- **Tương tác người dùng**: Hỗ trợ tương tác người dùng với `@testing-library/react` và `@testing-library/user-event`.
- **Xử lý dữ liệu**: Sử dụng `axios` cho các yêu cầu API và `bcrypt` cho bảo mật dữ liệu.
- **Kiểu dáng**: Sử dụng `Sass` cho kiểu dáng linh hoạt và mạnh mẽ.
- **Định tuyến**: Điều hướng dễ dàng với `react-router-dom`.
- **Phát triển và thử nghiệm**: Quy trình làm việc hiệu quả với `react-scripts`.



## Cài đặt

### Điều kiện tiên quyết

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt `Node.js` (v14+) và `npm` (v5.6+). Kiểm tra phiên bản bằng cách chạy:

```bash
node -v
npm -v

Clone kho lưu trữ
Clone dự án này sử dụng git:

git clone https://github.com/CHOU-003/WebsiteFLC/


Cài đặt phụ thuộc
Trong thư mục dự án, chạy lệnh sau để cài đặt các phụ thuộc:

npm install

Phát triển
Khởi động máy chủ phát triển
Khởi động ứng dụng ở chế độ phát triển:

npm start

Ứng dụng sẽ tự động mở trong trình duyệt tại http://localhost:3000.

Xây dựng cho sản xuất
Tạo bản dựng sản xuất tối ưu hóa:

npm run build

Bản dựng sẽ được lưu trong thư mục build.

Kiểm tra
Chạy các bài kiểm tra với:

npm test
```

# Server

## Giới thiệu
Dự án này hỗ trợ xử lý dữ liệu trực tiếp từ yêu cầu client thông qua api, với sự hỗ trợ của `routing` từ framework `express.js` và model tạo nên từ `Schema` của `MongoDB` tạo nên một hệ thống xử lý chính xác các yêu cầu từ View đồng thời còn giúp dự án linh hoạt, dễ dàng mở rộng. 

## Tính năng

- **Framework**: express.js giúp đơn giản hóa việc xây dựng ứng dụng web api. Với chức năng cốt lỗi routing, nó cho phép bạn định nghĩa các trình xử lý cho các đường dẫn URL và phương thức HTTP khác nhau (GET, POST, PUT, DELETE). 
- **Cơ sở dữ liệu**:  mongoDB giúp website linh hoạt và dễ mở rộng.

## Cài đặt

### Điều kiện tiên quyết

Yêu cầu cài đặt `Node.js` và `mongodb`

Cài đặt Node.js và MongoDB:

Node.js: Tải xuống và cài đặt phiên bản mới nhất của Node.js từ https://nodejs.org/en/download.
MongoDB: Tải xuống và cài đặt MongoDB Community Server cho hệ điều hành của bạn từ https://www.mongodb.com/docs/manual/installation/.

1. Khởi tạo dự án Node.js:
```bash
npm i express
```
2. Cài đặt các gói Express và Mongoose bằng lệnh:
```bash
npm install express mongoose
```
3. Cấu hình kết nối MongoDB:
  Tạo tệp `config/database.js` để lưu trữ thông tin kết nối MongoDB.
  Thêm mã sau vào tệp `database.js`:
```bash
const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/yourDatabaseName';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB database!'));

module.exports = db;
```
Thay thế `yourDatabaseName` bằng tên cơ sở dữ liệu MongoDB của bạn.

4.Chạy ứng dụng:

Mở terminal hoặc command prompt trong thư mục dự án của bạn.
Chạy lệnh:
```bash
node index.js
```




Đây là một cách trình bày thông tin một cách chuyên nghiệp và dễ đọc, phù hợp cho một tệp `README.md`. Hãy chắc chắn rằng bạn đã thay thế URL kho lưu trữ GitHub thực tế của bạn trước khi sử dụng nội dung này.
