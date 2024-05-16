import renderfilterResultList from "../renderfilterResultList/index.js";
import {findKcalItem, calculateMidleIngradients, totalCount} from "../config/index.js";

export default function handleInputChange({elem, btnInputDelite, input, resultBox, kkalListdal,  inputMg,  inputKcal, inputTotal}) {
    let result = [];
let inputValue = input.target.value;
// console.log("===> ",inputValue);
if (inputValue.length) {
    result = kkalListdal.filter( item => item.productName.toLowerCase().includes(inputValue.toLowerCase())) 
                // console.log(result);
               const resLi = renderfilterResultList(result)
            //    console.log("resLi", resLi);
            if (resLi.length > 0) {
                resultBox.innerHTML = `<ul class="result-box_list">${resLi}</ul>`
            } else {
                resultBox.innerHTML = ""
            }
                const resultBoxItem = document.querySelectorAll(".filter-result_item");
            // console.log("===>tt",resultBoxItem);

                if (resultBoxItem) {
                    resultBoxItem.forEach(el => {
                        el.addEventListener("click", (e)=>{
                //             // console.log(input.target.value);
                            console.log("<===",e.currentTarget.dataset.id);
                           const selectedProduct  = findKcalItem(kkalListdal, e.currentTarget.dataset.id)
                           if (selectedProduct) {
                        //    console.log(selectedProduct);
                            // const kcalInput = document.querySelector("#input_kcal");
                            // const totalInput = document.querySelector("#input_total");
                            input.target.value = selectedProduct.productName;
                            inputKcal.value = selectedProduct.kcal;
                            // console.log(selectedProduct.kcal, inputMg.value);
                            const resTotal = calculateMidleIngradients(selectedProduct.kcal, inputMg.value)
                            inputTotal.value = resTotal
                            // console.log("resTotal ===",resTotal);
                            // console.log("elem ", elem.id);
                            elem.id = selectedProduct.id
                            btnInputDelite.id = selectedProduct.id

                            totalCount()
                            }
                            resultBox.innerHTML = "";
                        });
                           
                           
                    });
                }
            } else {
                resultBox.innerHTML = ""
            }
           

}
