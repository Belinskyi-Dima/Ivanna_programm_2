import {totalCount} from "./index.js"
export default function clearInputValue (elem) {
    const inputName = elem.querySelector("#input-box");
    const inputMg = elem.querySelector("#input_mg");
    const inputKcal = elem.querySelector("#input_kcal");
    const inputTotal = elem.querySelector("#input_total");
    inputName.value = "";
    inputMg.value = "";
    inputKcal.value = ""
    inputTotal.value = ""
    totalCount()

}