// literal型
// 決まった文字列や数値しか入らないという制御が可能
let postStatus: 'draft' | 'published' | 'deleted'

postStatus = 'draft' // OK

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}
// never型
// 決して発生しない値の種類を表す
function error(message: string): never {
  throw new Error(message)
}

function foo(x: string | number[]): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }

  // 上記のような場合、下記がないと、コンパイルエラーになってしまう
  // 下記を追加することで、コンパイラに明示的に値が返らないことを伝える
  return error('Never happens')
}

const r: boolean = foo('Yuga')
console.log(r)

// neverのより有効な使い方

// 将来的にも定数が追加される可能性のあるenum型を定義
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword
}

const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting'
    case PageType.EditProfile:
      return 'Edit Profile'
    case PageType.ChangePassword:
      return 'Change Password'
    default:
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}
