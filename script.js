const wrapper = document.querySelector('.wrapper'),
inputQr = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
imgQr = wrapper.querySelector('.qrCode img');

generateBtn.addEventListener('click', () => {
    let value = inputQr.value;
    if (!value) return;
    generateBtn.innerText = "Generating QR Code..."

    imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    imgQr.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR Code"
    })
});

inputQr.addEventListener('keyup', () => {
    if (!inputQr.value) {
        wrapper.classList.remove('active');
    }
});