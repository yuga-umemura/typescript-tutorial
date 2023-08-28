// インデックス型を用いると、オブジェクトのプロパティが可変のとき、まとめて型を定義できる
type SupportVersions = {
  [env: number]: boolean
}

// stringのプロパティに定義した場合、エラーが起きる
let versions: SupportVersions = {
  102: false,
  103: false,
  104: true
  // 'v105': true // -> errorになる
}
