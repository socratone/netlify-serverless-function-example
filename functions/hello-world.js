exports.handler = async (event, context, callback) => {
  // Promise를 return 해야 한다.
  return {
    // CORS 에러 없이 모든 곳에서 접근 가능하게 하려면 아래처럼 headers 속성을 넣을 수 있다.
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    statusCode: 200,
    body: 'hello world', // 반드시 string이어야 한다. string이 아닌 경우에는 JSON.stringify 메소드를 써야 한다.
  };
};
