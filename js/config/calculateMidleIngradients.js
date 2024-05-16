export default function calculateMidleIngradients( amount,kkalAmountEnter) {
    let midlValueKall = kkalAmountEnter ? Number(kkalAmountEnter) / 100 *  Number(amount) : "";
            if (midlValueKall.toString().includes('.') && midlValueKall.toString().split('.')[1].length > 2) {
                midlValueKall = parseFloat(midlValueKall.toFixed(2));
            } else {
                midlValueKall = midlValueKall;
            }
    return midlValueKall
}
