// 型に対してkeyofオペレーターを用いると、その型がもつ各プロパティの型のUnion型を返す
interface User5 {
  name: string
  age: number
  email: string
}

type UserKey = keyof User5 // 'name' | 'age' | 'email' というUnion型となる

const key1: UserKey = 'name'
// const key2: UserKey = 'phone' // コンパイルエラー

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const userKOO: User5 = {
  name: 'Takuya',
  age: 36,
  email: 'test@example.com'
}

// オブジェクトに存在するキーを使用して何か関数の処理を行いたい際などに安全に実装できる
const userName = getProperty(userKOO, 'name')
console.log(userName)
