function fetch(url, successCallback, errorCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
      if (req.status == 200) {
        successCallback(req.responseText);
      }
      else {
        errorCallback(req.statusText);
      }
    }
  };
  req.send(null);
}
