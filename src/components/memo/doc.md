1. memo() -> Higher Order Component (HOC)
   - Được viết ôm ngoài react component
2. useCallback(logic, [empty/dpens]) -> Muốn học thì cần nắm chắc 2 kiến thức về :
   - Reference types (tham chiếu)
   - React memo()

(!!) Tổng kết:

- Khi sử dụng memo() thì khi truyền `function` từ cha -> con dưới dạng props thì phải luôn sử dụng useCallback (xem ví dụ `CallbackExample`) để tránh bị re-render lại component con
