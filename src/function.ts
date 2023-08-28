function sayHello1(name: string): string {
  return `Hello ${name}`  
}

const greet: string = sayHello1('Yuga')
console.log(greet)

// 名前とフォーマット関数を受け取り、フォーマットを実行してコンソール出力を行う関数
function printName1(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

// sanを末尾につけるフォーマット関数を定義
function formatName(name: string) {
  return `${name} san`
}

printName1('Yuga', formatName)

// アロー関数の場合
let sayHello2 = (name: string): string => `Hello ${name}`

function getBirdsInfo(name: string): string[] {
  return name.split(',')
}

function singBirds(name: string[], birdInfo: (x: string) => string[]): string {
  return birdInfo(name[0]) + ' piyopiyo'
}

console.log(singBirds(['hato', 'kij'], getBirdsInfo))