import DOMPurify from "dompurify";

function onHighlight(inputText: string, dataText: any) {
  const specialSigns = /[\\[{().+*?|^$]/g;
  let input = inputText;

  if (input !== "") {
    if (specialSigns.test(input)) input = input.replace(specialSigns, "\\$&");
    let regExp = new RegExp(input, "gi");

    return {
      __html: DOMPurify.sanitize(dataText.replace(regExp, "<mark>$&</mark>")),
    };
  } else {
    return {
      __html: DOMPurify.sanitize(dataText.replace(specialSigns, "$&")),
    };
  }
}

export default onHighlight;
