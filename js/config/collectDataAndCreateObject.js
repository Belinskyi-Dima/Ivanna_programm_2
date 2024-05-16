export default function collectDataAndCreateObject() {
    const previewImg = document.querySelector('.modal_img').getAttribute("src");
    const prevewName = document.querySelector('.card_info-title');
    const subTitle = document.querySelector(".card_info-sub_name");
    const dayInWeek = document.querySelector('.dropdown-btn');
    const textArea = document.querySelector('.textarea');
    const previewItems = document.querySelectorAll('.dropdown-info_item');
    const preview_total = document.querySelector('.preview_total-amount')
   
        const cardObj = {
            product_imgUrl:previewImg,
            product_name: prevewName.textContent,
            product_subtitle: subTitle.textContent,
            product_meal: dayInWeek.textContent,
            product_cooking : textArea.textContent,
            "igradients":{},
            totel_kkal: preview_total.textContent
            
        }
        previewItems.forEach(item=> {
            const defaultName = item.querySelector('#input-box').value;
            const defaultMg = item.querySelector('#input_mg').value;
            const defaultKkal = item.querySelector('#input_kcal').value;
            const defaultTotal = item.querySelector('#input_total').value;
            if (defaultName) {
                cardObj['igradients'][defaultName] = {
                    "ingradient_mg": defaultMg,
                    "ingradient_kkal": defaultKkal,
                    "ingradient_total": defaultTotal
                }
                
            }
            
        })
    return cardObj;
}