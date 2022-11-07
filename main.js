function convert() {
    let Amount = document.getElementById('amount');
    let fromC = document.getElementById('from').value;
    let toC = document.getElementById('to').value;
    let resultsUSD = parseInt(Amount.value) / 23000;
    let resultsVND = parseInt(Amount.value) * 23000;

    if(fromC == 'VND' && toC == 'USD') {
        document.getElementById('resultDiv').innerHTML = ' ' + resultsUSD + '$';
    }else if(fromC == 'USD' && toC == 'VND') {
        document.getElementById('resultDiv').innerHTML = ' ' + resultsVND + 'Đ';
    }    
}