function calc(isSum: boolean) {
  let a = 100
  if (isSum) {
    let b = a + 1
    return b
  }

  // varで定義した場合はエラーにならないが、letで定義した場合はエラーになる
  // return b
}

const num: number = 100

// constは定数なので値の再代入はコンパイルエラーになる
// num = 200

// 配列
const array: string[] = []
array.push('Takuya')
// エラー
// array.push(1)

// ジェネリック表記
const mixedArray = ['foo', 1]
const mixedArrayU: (string | number)[] = ['foo', 1] // Union型
const mixedArrayT: [string, number] = ['foo', 1] // タプル

console.log(mixedArray)

// オブジェクト型
const userCalc: { name: string; age: number } = {
  name: 'Takuya',
  age: 36
}

console.log(userCalc.name)
console.log(userCalc.age)

// ?を用いるとオプショナル（省略可能）なプロパティとして指定可能
function printName(obj: { firstName: string; lastName?: string }) {
  console.log(obj.firstName + ' ' + obj.lastName)
}

printName({ firstName: 'Yuga', lastName: 'Umemura' })
printName({ firstName: 'Takuya' })

// any:すべての型を許容
let userCalc2: any = { firstName: 'Takuya' }
