// unknown -> anyと同じくどのような値も代入できる型
const x: unknown = 123
const y: unknown = 'Hello'

// anyと異なり、代入された値はそのまま任意の関数やプロパティにアクセスできない
// console.log(x.toFixed(1))
// console.log(y.toLowerCase())

// 型安全な状況下で関数やプロパティにアクセスして実行
if (typeof x === 'number') {
  console.log(x.toFixed(1))
}

if (typeof y == 'string') {
  console.log(y.toLowerCase())
}
