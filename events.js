const content = document.querySelector("#content");
console.log(content);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  // if (message === 'get-user-data') {
  //   sendResponse(user);
  // }
  content.innerHTML = message;
  alert("here");
  console.log("ssssssssss");
});
