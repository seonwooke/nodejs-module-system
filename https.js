const { send } = require('./request');
const { read } = require('./response');

function makeRequest (url, data) {
  // 요청을 보내기
  send(url, data);

  // 데이터를 return 하기
  return read();
}

const responseData = makeRequest('https://naver.com', 'any daa');
console.log(responseData);