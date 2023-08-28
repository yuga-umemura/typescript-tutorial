// TypeScriptの型は組み合わせて利用可能
// Union型：指定した複数の型の和集合
// Intersection型：指定した複数の型の積集合

function printId(id: number | string) {
  console.log(id)
}

// number
printId(11)
// string
printId('22')

// 型エイリアスとして定義
type Id = number | string

function printId2(id: Id) {
  console.log(id)
}

// 型エイリアスどうしを掛け合わせて新たな型を定義
type Identity = {
  id: number | string;
  name: string
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

// Union型
// IdentityまたはContactの型を受けることが可能
type IndentityOrContact = Identity | Contact

const id: IndentityOrContact = {
  id: '111',
  name: 'Takuya',
  email: 'test@example.com'
}

// Intersection型
type Employee = Identity & Contact

const employee: Employee = {
  id: '111',
  name: 'Takuya',
  email: 'test@example.com',
  phone: '012345678'
}
