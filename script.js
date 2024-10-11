document.addEventListener("DOMContentLoaded", function () {
    console.log("Name");

    let captchaText;

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        captchaText = '';
            for (let i = 0; i < 6; i++) {
                captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        document.getElementById('captchaPreview').innerText = captchaText;
    }

    generateCaptcha();

    document.getElementById('refreshCaptcha').addEventListener('click', function () {
        generateCaptcha();
    });


    const date = new Date();
    let year = date.getFullYear();
    let yearText = document.querySelector('.year');

    yearText.innerText=year;

    console.log(date);
    console.log(year);
});




