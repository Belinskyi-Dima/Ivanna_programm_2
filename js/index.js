import  getAllList  from "./getAllList/index.js";
import getKkalList from "./getKkalList/getKkalList.js";
import renderModal from "./renderModal/index.js";
import renderLocalStorage from "./renderLocalStorage/index.js";
const listData = await getAllList()
const kkalList = await getKkalList();

// console.log(listData);
// console.log(kkalList);
renderLocalStorage();
const navBtn = document.querySelectorAll('.nav_btn');
const formContainer = document.querySelectorAll(".form-container") 
navBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const clickedButton = e.target;
        navBtn.forEach(btn => {
            btn.classList.remove("active");
        });
        

        clickedButton.classList.add("active");
        
        console.log(clickedButton.id);
        formContainer.forEach(otherForm => {
        //    console.log(otherForm.dataset.name);
            if (otherForm.dataset.name === clickedButton.id) {
                // console.log(otherForm.dataset.name);
                otherForm.style.display = 'block';
            } else {
                otherForm.style.display = 'none';
            }
        });
    });
});

// ================

const modal  = document.querySelector(".modal");
const previewBox = document.querySelectorAll(".card_box");

// console.log("previewBox", previewContainer);
document.querySelectorAll(".menu_list .menu_item").forEach(product => {
    product.onclick = () => {
        let id = product.getAttribute("data-id");
        console.log("name",id);
        modal.innerHTML = "";
        document.body.classList.toggle("modal-open")

    

        // const addIngr = document.querySelector('.fa-plus');
        // addIngr.addEventListener("click", addIngradientToProgram);

    renderModal(modal, listData, id, kkalList)


    }

});

window.addEventListener('click', function(event) {
    // console.log(event.target);
    if (event.target == modal && modal.contains(event.target)) {
        // Якщо клікнуто поза модальним вікном, закриваємо його
        document.body.classList.toggle("modal-open")
        modal.style.display = 'none';
    } 

});


