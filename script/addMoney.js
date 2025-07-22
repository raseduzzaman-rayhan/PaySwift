document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseInt(amount);
        const amountPin = document.getElementById('amountPin').value;
        const convertedAmountPin = parseInt(amountPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseInt(mainBalance);


        if (convertedAmountPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
            alert('Add Money Successful');
            const container = document.getElementById()
        }
        else {
            console.log('Pin Number is Incorrect');
        }
    })