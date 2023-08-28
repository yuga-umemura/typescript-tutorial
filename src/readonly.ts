// readonlyを指定されたプロパティは変更不可になる
type User6 = {
  readonly name: string
  readonly gender: string
}

let userRo: User6 = { name: 'Takuya', gender: 'Male' }

// コンパイルエラー
// user.gender = 'Female'

// constは変数の代入に対して行う宣言、readonlyはオブジェクトやクラスのプロパティに対して行う宣言

type User7 = {
  name: string
  gender: string
}

// Readonly型というジェネリック型も存在
// Readonly型に型エイリアスを指定すると、すべてのプロパティが変更不可の型が作成される
type UserReadonly = Readonly<User7>

let user2: User7 = { name: 'Takuya', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'Takuya', gender: 'Male' }

user2.name = 'Yoshiki' // OK
// userReadonly.name = 'Yoshiki' // コンパイルエラー
