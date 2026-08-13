# Blueprint API

## auth-service (Port 8081)
- POST /auth/login (Public) - Đăng nhập
- POST /auth/register (Public) - Đăng ký

## course-service (Port 8082)
- GET /courses (Public) - Lấy danh sách môn học
- POST /courses (ADMIN) - Thêm môn học
- PATCH /internal/courses/{id}/reserve-seat (Internal) - Giữ chỗ học phần

## registration-service (Port 8083)
- POST /registrations (STUDENT) - Đăng ký môn học
- GET /registrations/my (STUDENT) - Xem danh sách đã đăng ký