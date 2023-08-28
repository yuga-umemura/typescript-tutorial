# typescript-tutorial2


## TypeScriptのコンパイルオプション
- noImplicitAny
  - 暗黙的なanyを使用した場合にエラーを起こす
- strictNullChecks
  - オプションをオンにしてnullやundefinedを利用する場合、Union型や省略可能引数を使って明示的にnullやundefinedを許容するような書き方が必要になる
  ```typescript
  // nullを明示的に許容するように型定義
  let date: Date | null
  date = new Date()
  date = null
  ```

  