function textAreaSize() {
    this.style.height = '5px';
    this.style.height = (this.scrollHeight) + 'px';
}
function textAreaClean() {
    textarea.value = "";
}
export {textAreaSize, textAreaClean} 