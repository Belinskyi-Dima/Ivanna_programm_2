import calculateMidleIngradients from "../config/calculateMidleIngradients.js";

export default function renderIngradients (prodArr, kkalListdal) {
    console.log(prodArr);
    let totalMidleValue = null;
// console.log(kkalListdal);

const ingradientsList = prodArr.map((item)=> {
    const midleAmound = calculateMidleIngradients(item.quantity, item.kcal);

    totalMidleValue += midleAmound;
    // console.log(midleAmound);
    return  `
    <li class="dropdown-info_item" id="${item.id}">
        <div class="search-box input-label">
            <div class="row">
                <input class="input-ingradient" type="text" id="input-box" placeholder="Prod Name" value="${item.productName}" autocomplete="off">
                <span class="input__name">Name</span>
                <i class="fas fa-times clear-input"></i>
            </div>
                <div class="result-box"></div>
        </div>

        <label class="input-label">
            <input class="input-ingradient" type="text" id="input_mg" placeholder="" value="${item.quantity}" autocomplete="off">
            <span class="input__name">mg</span>
        </label>


        <label class="input-label">
            <input class="input-ingradient" type="text" id="input_kcal" placeholder="" value="${item.kcal}" autocomplete="off" readonly>
            <span class="input__name">kcal</span>
        </label>


        <label class="input-label">
            <input class="input-ingradient" type="text" id="input_total" placeholder="" value="${midleAmound}" autocomplete="off" readonly>
            <span class="input__name">total</span>
        </label>
  
            <i class="fas fa-times delite-input" id="${item.id}"></i>
  
    </li>
    `
}).join("");

 
return {ingradientsList,totalMidleValue};
} 