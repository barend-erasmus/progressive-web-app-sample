function onLoad() {
  const json = JSON.stringify(this.responseText);

  // TODO
}

const requestGet = new XMLHttpRequest();
requestGet.addEventListener("load", onLoad);
requestGet.open("GET", "https://example.com");
requestGet.send();

const requestPOST = new XMLHttpRequest();
requestPOST.addEventListener("load", onLoad);
requestPOST.open("POST", "https://example.com");
requestPOST.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
requestPOST.send(JSON.stringify({ first_name: "foo", last_name: "bar" }));
