async function getKkalList() {
    const url = 'result_data.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data",data);
        return data;
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
}
export default getKkalList;