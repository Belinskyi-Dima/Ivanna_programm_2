export default function renderLocalStorage() {
    const container = document.querySelector(".menu_list-container");
    container.innerHTML = ""

    const res = Object.keys(localStorage).reduce(function(obj, key) { 
        let value = localStorage.getItem(key); 
        try {
            value = JSON.parse(value);
        } catch (error) {
            // Неможливо розпарсити як JSON, лишаємо значення як є
        }
        obj[key] = value; 
        return obj;
    }, {});

console.log("==> ",res);
const result = renderList(res)
container.insertAdjacentHTML("beforeend", result)
}

function renderList(res) {
    const days = Object.keys(res);
    let htmll = "";
    
    days.forEach(day => {
        let html = `<li class="menu_list-item">

            <p class="menu_item-title">${day}</p>`;
        const meals = Object.keys(res[day]);
        meals.forEach(meal => {
            html += `<div class="menu_item-box" >
                        <p class="menu_item-meal">${meal}</p>
                            <ul class="menu_ingradient_list">`;
            const ingredients = Object.keys(res[day][meal].igradients); 
            ingredients.forEach(ingredient => {
                html += `<li class="menu_ingradient-item">${ingredient}</li>`;
            });
            html += `</ul> </div>`;
        });
        html += `</li>`;
        htmll += html;
    });
    
   
    return htmll;
}