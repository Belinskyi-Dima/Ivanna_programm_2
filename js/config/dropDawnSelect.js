export default function dropDawnSelect(dropdown) {
  
    // console.log("sddd");
        // Знаходимо dropdown-content в межах кожного dropdown
        const dropdownContent = dropdown.querySelector('.dropdown-content');
    
        // Отримуємо кнопку відкриття dropdown
        const dropdownButton = dropdown.querySelector('.dropdown-btn');
    
        // Додаємо подію при кліці на dropdown
        dropdownButton.addEventListener('click', function() {
            // Перевіряємо, чи dropdown-content відображений
            if (dropdownContent.style.display === 'block') {
                // Якщо відображений, то ховаємо його
                dropdownContent.style.display = 'none';
            } else {
                // Якщо прихований, то показуємо його
                dropdownContent.style.display = 'block';
            }
        });
    
        // Додаємо обробник подій для кожного елемента dropdown-content
        dropdownContent.addEventListener('click', function(event) {
            // Забороняємо подальше розповсюдження події
            event.stopPropagation();
            
            // Отримуємо текст пункту
            const text = event.target.innerText;
            
            // Оновлюємо текст кнопки dropdown
            dropdownButton.textContent = text;
    
            // Ховаємо dropdown-content
            dropdownContent.style.display = 'none';
        });

    }