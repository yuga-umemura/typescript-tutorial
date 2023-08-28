// 型ガード
// if文やswitch文の条件分岐で型のチェックを行った際、その条件分岐ブロック以降は
// 変数の型を絞り込まれる推論が行われる

function addOne(value: number | string) {
  if (typeof value === 'string') {
    return Number(value) + 1
  }
  return value + 1 // 自動的にnumber型であると扱われる
}

console.log(addOne(10))
console.log(addOne('20'))

type User4 = {
  info?: {
    name: string;
    age: number;
  }
}

let response = {}
// responseはJSON形式のAPIレスポンスが代入されている想定。User4型にアサーション
const user = (response as any) as User4

// オプショナルプロパティへの型ガード（if文）
// if文がないとエラーになる
if (user.info) {
  console.log(user.info.name)
}
