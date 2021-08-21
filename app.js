const memory8Gb = document.getElementById('8gb-memory-btn');
const memory16Gb = document.getElementById('16gb-memory-btn');
const storage256Gb = document.getElementById('256-gb-storage');
const storage512Gb = document.getElementById('512-gb-storage');
const storage1Tb = document.getElementById('1-tb-storage');
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
const macPrice = document.getElementById('mac-price');
const memoryPrice = document.getElementById('extra-memory-price');
const storagePrice = document.getElementById('extra-storage-price');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const cuponfield = document.getElementById('cupon-field');
const cuponApplyBtn = document.getElementById('cupon-apply-btn');
const footerTotal = document.getElementById('footer-total');


// memory button handle
memory8Gb.addEventListener('click', function () {
    memoryPrice.innerText = "0";
    updateTotal()
})

memory16Gb.addEventListener('click', function () {
    memoryPrice.innerText = "180";
    updateTotal()
})

// storage buttons handle 
storage256Gb.addEventListener('click', function () {
    storagePrice.innerText = '0';
    updateTotal()
})
storage512Gb.addEventListener('click', function () {
    storagePrice.innerText = '100';
    updateTotal()
})
storage1Tb.addEventListener('click', function () {
    storagePrice.innerText = '180';
    updateTotal()
})

// delivery cost button handle
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal()
})
expressDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal()
})

// cupon apply btn handle
cuponApplyBtn.addEventListener('click', function () {
    updateTotal()
})

// update total price function 
function updateTotal() {
    const cuponCode = cuponfield.value;
    const extraDeliveryCost = parseInt(deliveryCost.innerText);
    const extraMemoryPrice = parseInt(memoryPrice.innerText);
    const extraStoragePrice = parseInt(storagePrice.innerText);
    const productPrice = parseInt(macPrice.innerText);
    const totalTotalPrice = extraDeliveryCost + extraMemoryPrice + extraStoragePrice + productPrice;
    totalPrice.innerText = totalTotalPrice;
    // promo code
    if (cuponCode == 'stevekaku') {
        const priceAfterCuponCode = totalTotalPrice * 20 / 100;
        footerTotal.innerText = totalTotalPrice - priceAfterCuponCode;
    }
    else {
        footerTotal.innerText = totalTotalPrice;
    }
    // clear promo field 
    cuponfield.value = '';
}