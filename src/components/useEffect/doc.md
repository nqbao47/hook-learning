### Các kiến thức cần có trước khi học UseEffect

- Events: Add / remove event listener
- Observer pattern: Subscribe / Unsubscribe
- Closure
- Timer: setTimeOut, setInterval, clearTimeOut
- useState
- Mounted/ Unmounted
- Call API

## Side effects (Tại sao sử dụng useEffect ?)

- Ra đời để sử dụng khi muốn thực hiện các `side effect`, chỉ một chương trình phần mềm khi có 1 tác động xảy ra => dữ liệu của chương trình bị thay đổi...

- Cụ thể useEffect sẽ giúp chúng ta giải các `bài toán` sau:

1. Update DOM
   - F8 blog
2. Call API
3. Listen DOM events
   - Scroll
   - Resize
4. Cleanup
   - Remove listener / Unsubscribe
   - Clear timer

## Syntax (Cú pháp)

`useEffect(callback, [deps])`

- callback (bắt buộc) : sẽ chứa các hàm tự viết để xử lý side effect

- dependency (không bắt buộc)

## Các trường hợp sử dụng useEffect

1. `useEffect(callback)`
   - Gọi callback mỗi khi component re-render
   - Gọi callback sau khi element đc thêm vào DOM
2. `useEffect(callback, [])`
   - Chỉ gọi Callback 1 lần khi component Mounted
   - Tránh re-render vô tận
3. `useEffect(callback, [deps])`
   - Callback sẽ đc gọi lại mỗi khi deps thay đổi

## Lưu ý

- Lý thuyết 3 trường hợp:
  - Callback luôn đc gọi sau khi Component Mount
