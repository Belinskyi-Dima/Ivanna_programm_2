import {totalCount} from "../config/index.js";
export default function deliteInputItem(e) {

    console.log(e.target.id); 
    const inputBox = document.getElementById(e.target.id); 
    if (inputBox) {
        inputBox.remove();
        totalCount()
    }
}