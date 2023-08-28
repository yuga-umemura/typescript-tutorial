type Label = {
  [key: string] : string
}

// 上記型エイリアスを指定して、画面に表示する文字を定義するオブジェクトのキーと値を定義
const labels: Label = {
  topTitle: 'トップページのタイトルです',
  topSubTitle: 'トップページのサブタイトルです',
  toFeature1: 'トップページの機能1です',
  toFeature2: 'トップページの機能2です'
}

// interfaceは型エイリアスと似ている機能だが、より拡張性の高いオープンな機能を持つ

interface Point {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(`x座標は${point.x}です`)
  console.log(`y座標は${point.y}です`)
  console.log(`z座標は${point.z}です`)
}

interface Point {
  z: number;
}

// printPoint({x: 100, y:100}) 引数にzが存在しないためエラーになる
printPoint({x: 100, y:100, z:200})

// インターフェースはクラスの振る舞いの型を定義し、implementsを使用してクラスに実装を与えることが可能
// 例えばzを指定しないとコンパイルエラーになる
class MyPoint implements Point {
  x: number;
  y: number;
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x
    this.y = y
    this.z = z
  }
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// 複数のインターフェースを継承して新たなインターフェースを定義できる
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: '赤',
  radius: 10
}

class Point2 {
  x: number;
  y: number;

  // 引数がない場合の初期値を指定
  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  // 戻り値がない関数を定義するためにvoidを指定
  moveX(n: number): void {
    this.x += n
  }
  moveY(n: number): void {
    this.y += n
  }
}

const point = new Point2()
point.moveX(10)
console.log(point.x, point.y)

class Point3D extends Point2 {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    // 継承元のコンストラクタを呼び出す
    super(x, y)
    this.z = z
  }

  moveZ(n: number) {
    this.z += n
  }
}

const point3D = new Point3D()

point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`)

interface IUser {
  name: string;
  age: number;
  // sayhello: () => string; 引数なしで文字列を返す
}

class User2 implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = ' '
    this.age = 0
  }

  sayHello(): string {
    return `こんにちは、私は${this.name},${this.age}歳です。`
  }
}

const userClass = new User2()
userClass.name = 'Yuga'
userClass.age = 36
console.log(userClass.sayHello())

// アクセス修飾子を指定しない場合はpublic
class BasePoint3D {
  public x: number;
  private y: number; // 自身のクラスからのみアクセス可
  protected z:  number; // 自身のクラスとサブクラスからのみアクセス可

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const basePoint = new BasePoint3D()
basePoint.x
// basePoint.y # privateのためアクセス不可
// basePoint.z # protectedのためアクセス不可

// クラスを継承した際のアクセス制御
class ChildPoint extends BasePoint3D {
  constructor() {
    super()
    this.x // OK
    // this.y NG
    this.z //OK
  }
}