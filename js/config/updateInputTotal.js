import calculateMidleIngradients from "./calculateMidleIngradients.js"
export default function updateInputTotal(elem) {
    const inputMg = elem.querySelector("#input_mg");
    const inputKcal = elem.querySelector("#input_kcal");
    const inputTotal = elem.querySelector("#input_total");
    const result = calculateMidleIngradients(inputMg.value, inputKcal.value)
    console.log("result",result);
    inputTotal.value = result
}