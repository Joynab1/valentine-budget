function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    console.log(inputFieldValue);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const textElementValueString = elementField.innerText;
    const textElementValue = parseInt(textElementValueString);
    return textElementValue;
}
function setElementTextbyId(elementId, newValue) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}
function getTotalCost() {
    const chocolate = getTextElementValueById('chocolate');
    const rose = getTextElementValueById('rose');
    const diary = getTextElementValueById('diary');
    const total = chocolate + rose + diary;
    setElementTextbyId('total', total);
}
// function getAllCost() {
//     const allCost = getTextElementValueById('all-total');
//     const priceAfterDiscount = allCost + discountPrice;
//     setElementTextbyId('all-total', priceAfterDiscount);
//     return all
// }