# Thiết kế Biên giới Service (CRS Microservices)

## 1. Danh sách Service
- api-gateway (Port 8080, Không DB): Điểm vào duy nhất, định tuyến, xác thực sơ bộ.
- auth-service (Port 8081, DB: auth_db): Quản lý User, Student, đăng nhập, sinh/xác thực JWT.
- course-service (Port 8082, DB: course_db): Quản lý môn học, số chỗ.
- registration-service (Port 8083, DB: registration_db): Quản lý Đăng ký học phần.

## 2. Nguyên tắc Data Ownership
- Mỗi service dùng DATABASE RIÊNG, không truy cập trực tiếp DB của service khác.
- Muốn lấy data khác service bắt buộc phải gọi REST API.