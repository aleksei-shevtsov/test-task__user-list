function highlighter(inputText: string, dataText: any) {
  const specialSigns = /[\\[{().+*?|^$]/g;
  let regExp = new RegExp(`${inputText}`, "gi");

  if (specialSigns.test(inputText)) {
    inputText.replace(specialSigns, "\\$&");
    return dataText.replace(regExp, "<mark>$&</mark>");
  }
}
export default highlighter;
