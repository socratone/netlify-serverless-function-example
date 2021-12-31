exports.handler = async (event, context, callback) => {
  // Promise를 return 해야 한다.
  return {
    statusCode: 200,
    body: 'hello world', // 반드시 string이어야 한다. string이 아닌 경우에는 JSON.stringify 메소드를 써야 한다.
  };
};
