document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cashout-section').style.display = 'none'
document.getElementById('transfer-money-section').style.display = 'none'
document.getElementById('get-bonus-section').style.display = 'none'
document.getElementById('transaction-history-section').style.display = 'none'

document.getElementById('add-money-box')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'block'
        document.getElementById('cashout-section').style.display = 'none'
        document.getElementById('transfer-money-section').style.display = 'none'
        document.getElementById('get-bonus-section').style.display = 'none'
        document.getElementById('transaction-history-section').style.display = 'none'
    });

document.getElementById('cashout-box')
    .addEventListener('click', function () {
        document.getElementById('cashout-section').style.display = 'block'
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('transfer-money-section').style.display = 'none'
        document.getElementById('get-bonus-section').style.display = 'none'
        document.getElementById('transaction-history-section').style.display = 'none'
    })
document.getElementById('transfer-money-box')
    .addEventListener('click', function () {
        document.getElementById('transfer-money-section').style.display = 'block'
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none'
        document.getElementById('get-bonus-section').style.display = 'none'
        document.getElementById('transaction-history-section').style.display = 'none'
    })
document.getElementById('transaction-history-box')
    .addEventListener('click', function () {
        document.getElementById('transaction-history-section').style.display = 'block'
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none'
        document.getElementById('transfer-money-section').style.display = 'none'
        document.getElementById('get-bonus-section').style.display = 'none'
    })
document.getElementById('get-bonus-box')
    .addEventListener('click', function () {
        document.getElementById('get-bonus-section').style.display = 'block'
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none'
        document.getElementById('transfer-money-section').style.display = 'none'
        document.getElementById('transaction-history-section').style.display = 'none'
    })

document.getElementById('logout-btn')
    .addEventListener('click', function () {
        window.location.href = "/index.html"
    })
document.getElementById('home-btn')
    .addEventListener('click', function () {
        window.location.href = "/main.html"
    })