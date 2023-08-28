interface User {
  name:string
  social: {
    facebook:boolean
    twitter:boolean
  }
}

// nullでないことを（コンパイラに）示したいとき、Non-null Assertionという機能で明示的にコンパイラに問題がないことを伝えられる
function processUser(user?: User) {
  let s = user!.name
}