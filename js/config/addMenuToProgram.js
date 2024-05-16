
export default function addMenuToProgram(fff, obj) {
    const daysOfWeek = ['понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота', 'неділя'];

    // Перевіряємо, чи є прийом їжі obj.product_meal вже в локальному сховищі
    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        const mealsJSON = localStorage.getItem(day);
        if (!mealsJSON) {
            // Якщо для даного дня немає даних, додаємо їх та завершуємо цикл
            const meals = { [obj.product_meal]: obj };
            localStorage.setItem(day, JSON.stringify(meals));
            console.log(`Додано в ${day}:`, obj);
            break;
        } else {
            const meals = JSON.parse(mealsJSON);
            if (!meals[obj.product_meal]) {
                // Якщо для даного дня немає прийому їжі obj.product_meal, додаємо його та завершуємо цикл
                meals[obj.product_meal] = obj;
                localStorage.setItem(day, JSON.stringify(meals));
                console.log(`Додано в ${day}:`, obj);
                break;
            }
        }
    }
}