function closeModal() {
    const modal  = document.querySelector(".modal");
    // const closeBtn = document.querySelector(".close-btn");
    // console.log("gggg",closeBtn);
    // closeBtn.onclick = () =>{

        document.body.classList.toggle("modal-open")
        modal.style.display = 'none';
 
    // };
}

 export default closeModal;