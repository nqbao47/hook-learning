## useReducer() Hook

- Tương tự như useState(), tuy nhiên chỉ nên sử dụng cho các bài toán phức tạp

### Ví dụ với bài toán Up/Down

- Các bước thực hiện khi sử dụng useState()

  - 1. Init state: 0
  - 2. Actions: Up (state + 1), Up (state - 1)

- Các bước thực hiện khi sử dụng useReducer()
  - 1. Init state: 0
  - 2. Actions: Up (state + 1), Up (state - 1)
  - 3. Reducer
  - 4. Dispatch
