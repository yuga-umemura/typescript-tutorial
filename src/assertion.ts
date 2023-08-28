// 型アサーション→	TypeScriptが推論、分析した型は任意の方法で上書きできる
// https://typescript-jp.gitbook.io/deep-dive/type-system/type-assertion



// 変数 = 値 as 型
// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

// 複雑な型アサーションを実現したい場合は、まずanyに変換し、次に目的の方に変換する
const responseAs: String = 'Hello'

type UserAs = {
  name :string;
  age: number;
}

const result = (responseAs as any) as UserAs