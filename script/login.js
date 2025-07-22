document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const accountPin = document.getElementById('account-pin').value;
        const convertedAcPin = parseInt(accountPin);
        if (accountNumber.length === 11) {
            if (parseInt(convertedAcPin) === 1234) {
                window.location.href = "/main.html"
            } 
            else {
                alert('Pin Number is Incorrect');
            }
        }
        else {
            alert('Mobile Number is Incorrect');
        }
    })