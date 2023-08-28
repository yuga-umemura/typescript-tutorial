// Enum（列挙型）を利用することで、名前のついた定数セットを定義できる
// JSにはない機能

// TSの場合
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// enum Directionを参照
let direction: Direction = Direction.Left
console.log(direction) // 2
// 特に指定しなかった場合、Enumは定義された順番に沿ってゼロから数字が自動的にインクリメントされる

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 例えばAPIのパラメータとして文字列が渡されたケースを想定
const value = 'DOWN'
// 文字列からEnum型に変換
const enumValue = value as Direction2

if (enumValue === Direction2.Down) {
  console.log('Down is selected')
}

// 文字列で渡される値とEnumの定数値を比較する際に便利
