// Optional Chaining：ネストされたオブジェクトのプロパティが存在するかどうかの条件分岐を簡単に記述できる

// nullになりうるsocialというプロパティの型を定義
interface UserOc {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}

let userOc: UserOc

userOc = { name: 'Takuya', social: { facebook: true, twitter: true } }

console.log(userOc.social?.facebook)

let userOc2: UserOc = { name: 'Takuya' }
// socialが存在しないケースでもエラーにならない
console.log(userOc2)
