import renderIngradients from "../renderIngradients/index.js";
import renderLocalStorage from "../renderLocalStorage/index.js";
import {findKcalItem, closeModal, calculateMidleIngradients, dropDownInputList, addMenuToProgram, collectDataAndCreateObject, updateInputTotal, totalCount, clearInputValue, handleInputChange, deliteInputItem, dropDawnSelect, textAreaSize, textAreaClean, addIngradient} from "../config/index.js"; 
import renderfilterResultList from "../renderfilterResultList/index.js";

export default function renderModal(momodal, listData, id, kkalListdal) {
    const el = listData.productLists.find(item => item.id === id); 
    // console.log(el);
    const prodArr = [];
    let count = 1;
    for (const item of el.products) {
        const foundProduct = kkalListdal.find(prod => prod.id === item.product);
        // console.log(foundProduct);
        const quantity = item["quantity"];
        prodArr.push({...foundProduct, quantity});
    }
    // console.log(prodArr);
    if (el) {
        momodal.style.display = 'flex';

    }
    const newObj = {...el, products:prodArr}
    console.log(newObj);
    const {name, description, type, imgUrl, products} = newObj;

    const {ingradientsList, totalMidleValue} = renderIngradients(prodArr, kkalListdal)
    // console.log( typeof totalMidleValue);
    let sumTotal = null
    if (totalMidleValue) {
           if (totalMidleValue.toString().includes('.') && totalMidleValue.toString().split('.')[1].length > 2) {
                sumTotal =parseFloat( Number(totalMidleValue).toFixed(2));
            } else {
                sumTotal = totalMidleValue;
            }
    }

    momodal.insertAdjacentHTML("beforeend", `
    <div class="card_box">
    <i class="fas fa-times close-btn"></i>
    <div class="card_img-box">
        <img class="modal_img" src="./img/img-1.jpg" alt="2">
    </div>
    <div class="card_info-title-box">
        <span class="card_info-sub">name</span>
        <span class="card_info-title">${name}</span>
    </div>
    <p class="card_info-sub_name">гручана каша cуха</p>
    <div  class="dropdown">
        <button class="dropdown-btn filter-btn">${type}</button>
        <i class="fas fa-chevron-down"></i>
        <div class="dropdown-content">
            <a data-day="breakfast" href="#">сніданок</a>
            <a  data-day="dinner" href="#">обід</a>
            <a  data-day="snack " href="#">перекус</a>
            <a  data-day="dinner" href="#">вечеря</a>
        </div>
    </div>
    <div class="textarea-box">
        <textarea class="textarea" placeholder="тут пишемо як готувати !!!!" name="" id="textarea" cols="" rows="">${description}</textarea>
        <i class="fas fa-times textarea-clear"></i>
    </div>
    <ul class="dropdown-info_list">
        ${ingradientsList}    
    </ul>
    <div class="preview_plus-box">
        <i class="fas fa-plus"></i>
    </div>
    <div class="product_total">
        <span class="preview_total-name">Total Kall: </span>
        <span class="preview_total-amount">${sumTotal}</span>
    </div>  
    
    <div class="product_btn">
    <a class="btn_add" href="#">Add</a>
    <a class="btn_edit" href="#">Save & Add</a>
</div>
</div>
    `);
{/* <button class="btn_add">save</button> */}
    const closeBtn =document.querySelector(".close-btn");
    closeBtn.addEventListener("click", (e)=> {
        momodal.style.display = "none";
        document.body.classList.remove("modal-open")
    })

    const  textarea = document.getElementById('textarea');
    const taClean = document.querySelector(".textarea-clear");
    textarea.addEventListener('input', textAreaSize)
    taClean.addEventListener("click", textAreaClean);

   

    const dropdowns = document.querySelector('.dropdown');
    dropdowns.addEventListener("click", ()=> dropDawnSelect(dropdowns));

    
    dropDownInputList( kkalListdal);

    const pluss = document.querySelector(".fa-plus");
    pluss.addEventListener("click",()=>{
        addIngradient()
        dropDownInputList( kkalListdal);
    }  )

    const addBtnMenu = document.querySelector(".btn_add");
    addBtnMenu.addEventListener("click", ()=> {
    const result = collectDataAndCreateObject()
        console.log(result);
        addMenuToProgram("vova", result);
        closeModal();
        renderLocalStorage()

} )
}

