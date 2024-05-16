export default function renderfilterResultList (result) {
    const content = result.map(list=>{
        // console.log(list);
        return `<li class="filter-result_item" data-id=${list.id}>
                    <span class="result-box_item" data-id=${list.id} >${list.productName}</span>
                    <span class="result-box_item">${list.kcal}</span>
                </li>`
    }).join("")
   return content
}