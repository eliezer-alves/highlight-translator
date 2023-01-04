function displayResult(source, result) {
  console.clear();
  if (source.length > 32) {
    console.log(source);
    console.log("-> ", result);
  } else {
    console.log(source + " -> " + result);
  }

  chrome.runtime.sendMessage(result, (response) => {
    // 3. Got an asynchronous response with the data from the service worker
    console.log("received user data");
  });
}

function loadTranslation(value, from = "en-GB", to = "pt-BR") {
  fetch(
    `https://api.mymemory.translated.net/get?q=${value}&langpair=${from}|${to}`
  )
    .then((res) => res.json())
    .then((data) => {
      displayResult(value, data.responseData.translatedText);
    });
}

document.addEventListener("mouseup", (event) => {
  if (window.getSelection().toString().length) {
    let exactText = window.getSelection().toString();
    loadTranslation(exactText);
  }
});
