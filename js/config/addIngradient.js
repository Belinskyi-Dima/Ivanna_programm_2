
export default function addIngradient(params) {
    const ul = document.querySelector(".dropdown-info_list");
    ul.insertAdjacentHTML("beforeend",`
    <li class="dropdown-info_item" id="">
    <div class="search-box input-label">
        <div class="row">
            <input class="input-ingradient" type="text" id="input-box" placeholder="Prod Name" value="" autocomplete="off">
            <span class="input__name">Name</span>
            <i class="fas fa-times clear-input"></i>
        </div>
            <div class="result-box"></div>
    </div>

    <label class="input-label">
        <input class="input-ingradient" type="text" id="input_mg" placeholder="" value="" autocomplete="off">
        <span class="input__name">mg</span>
    </label>


    <label class="input-label">
        <input class="input-ingradient" type="text" id="input_kcal" placeholder="" value="" autocomplete="off" readonly>
        <span class="input__name">kcal</span>
    </label>


    <label class="input-label">
        <input class="input-ingradient" type="text" id="input_total" placeholder="" value="" autocomplete="off" readonly>
        <span class="input__name">total</span>
    </label>

        <i class="fas fa-times delite-input" id=""></i>

</li>
`)
    // console.log("dd", ul);
}