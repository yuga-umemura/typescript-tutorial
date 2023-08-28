function fetchFromServer(id: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 1000)
  })
}

// 非同期処理を含むasync functionの戻り値の型はPromiseとなる
async function asyncFunc(): Promise<string> {
  // Promiseな値をawaitすると中身が取り出せる（ように見える）
  //fetchFromServer()関数のPromiseの結果が返されるまで待つ
  const result = await fetchFromServer('111')
  return `The result: ${result.success}`
}

// await構文を使うためには、async functionの中で呼び出す必要がある
// awaitを指定した関数のPromiseの結果が返されるまで、async function内の処理を一時停止する。
// (async () => {
//   const result = await asyncFunc()
//   console.log(result)
// })

// Promiseとして扱う際には以下のように記述
asyncFunc().then((result) => console.log(result))
