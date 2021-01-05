function loadJSON(filePath) {
  const json = JSON.parse(loadTextFileAjaxSync(filePath, "application/json"));
  if (json) {
    let keys = Object.keys(json);
    keys.forEach(val => {
      if (typeof json[val] === "string") {
        json[val] = (<string>json[val])
          .replace("#IP#", json["ip"])
          .replace("#PORT#", json["port"])
      }
    });
  }
  return json;
}

function loadTextFileAjaxSync(filePath, mimeType) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    return xmlhttp.responseText;
  }
  else {
    return null;
  }
}

export const environment = loadJSON('./config/config.json');
// export const appVersion = {
//   VERSION: require('../../package.json').version
// };
