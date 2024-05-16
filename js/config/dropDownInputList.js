import {findKcalItem, calculateMidleIngradients, updateInputTotal, totalCount, clearInputValue, handleInputChange, deliteInputItem, dropDawnSelect, textAreaSize, textAreaClean, addIngradient} from "./index.js"; 

export default function dropDownInputList(kkalListdal) {
    const inputBoxes =  document.querySelectorAll(".dropdown-info_item");
    inputBoxes.forEach(elem=> {
        // console.log(elem);
        const inputName = elem.querySelector("#input-box");
        const inputMg = elem.querySelector("#input_mg");
        const inputKcal = elem.querySelector("#input_kcal");
        const inputTotal = elem.querySelector("#input_total");

        const btnInputClear = elem.querySelector(".clear-input")
        const btnInputDelite = elem.querySelector(".delite-input")

        const resultBox = elem.querySelector(".result-box");

        inputName.addEventListener("input", (input)=> {
            
            handleInputChange({elem, btnInputDelite ,input, resultBox, kkalListdal, inputMg,  inputKcal, inputTotal})
        } )

        inputMg.addEventListener("click", (item)=> { 
            // console.log("aaaa");
            item.target.value = ""

        })
        inputMg.addEventListener("input", (item)=> {
            // console.log("dsrfg");
            // item.target.value = ""
            updateInputTotal(elem);
            totalCount()
        })

        btnInputClear.addEventListener("click", ()=> {
            clearInputValue(elem)
        })

        btnInputDelite.addEventListener("click", deliteInputItem)

        // console.log(elem);
        // ====================================== result box position
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        function setPosition() {
            if (isElementInViewport(elem)) {
                resultBox.style.bottom = "100%"; // Відображення вверху
            } else {
                resultBox.style.top = "100%"; // Відображення внизу
            }
        }
        setPosition();

        // Встановлення позиції при зміні розміру вікна
        window.addEventListener("resize", setPosition);
    // =================================
        
    })
}