
document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const Quantity = getInputFieldValueById('kitkat-quantity');
    const Price = getTextElementValueById('kitkat-price');
    const newPrice = Quantity * Price;
    const chocolatePriceTotal = setElementTextbyId('chocolate', newPrice);
    const total = getTotalCost();
})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const Quantity = getInputFieldValueById('rose-quantity');
    const Price = getTextElementValueById('rose-price');
    const newPrice = Quantity * Price;
    const rosePriceTotal = setElementTextbyId('rose', newPrice);
    const Total = getTotalCost();
})
document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const Quantity = getInputFieldValueById('diary-quantity');
    const Price = getTextElementValueById('diary-price');
    const newPrice = Quantity * Price;
    const diaryPriceTotal = setElementTextbyId('diary', newPrice);
    const Total = getTotalCost();
})
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const codeValue = getInputFieldValueById('promo-code');
    if (codeValue == 101) {
        const total = getTextElementValueById('total');
        discount = total * 0.1;
        const discountPrice = total - discount;

        const getAllTotal = document.getElementById('all-total');
        const allTotalString = getAllTotal.innerText;
        const allTotal = parseInt(allTotalString);
        const priceAfterDiscount = allTotal + discountPrice;
        console.log(priceAfterDiscount);
        setElementTextbyId('all-total', priceAfterDiscount);
    }
    else {
        alert('invalid promo code. Please enter valid promo code');
    }
})

