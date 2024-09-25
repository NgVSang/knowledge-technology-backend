# Backend dự án cuối kì môn Công Nghệ Tri Thức

Các luật lệ code chung:

- Đặt tên các file phải thêm đuôi chức năng cho file đó ( Vd: user.controller.ts ).
- Toàn bộ các file phải được export ra file index.ts của folder gốc.
- Trong file cũng phải được xuất ra 1 const chung ( Vd: Trong file user.controller.ts, toàn bộ các hàm chức năng phải được xuất ra const chung là userController ).

Http code:

- **200**: Yêu cầu **GET, POST** thành công.
- **201**: Yêu cầu tạo mới thành công.
- **400**: Yêu cầu không thực hiện được.
- **401**: Yêu cầu chưa được xác thực thông tin qua token.
- **500**: Lỗi không cụ thể, lỗi chung chung.

## Cài đặt dự án

Dự án này sử dụng [npm](https://www.npmjs.com/) để cài đặt.

```bash
cd to-your-root-project
npm install
```

## Cách chạy dự án

```bash
npm run dev
```
