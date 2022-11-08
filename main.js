

function changeType() {
    let Amount = document.getElementById('amount');
    let fromC = document.getElementById('from');
    let toC = document.getElementById('to');
    if( fromC.value === 'VND') {
        toC.value = 'USD'
    } else {
        toC.value = 'VND'
    }
}

function convert() {
    let Amount = document.getElementById('amount');
    let fromC = document.getElementById('from');
    let toC = document.getElementById('to');
    let resultsUSD = parseInt(Amount.value) / 23000;
    let resultsVND = parseInt(Amount.value) * 23000;
    if(fromC.value == 'VND' && toC.value == 'USD') {
        document.getElementById('resultDiv').innerHTML = ' ' + resultsUSD + '$';
    }else if(fromC == 'USD' && toC == 'VND') {
        document.getElementById('resultDiv').innerHTML = ' ' + resultsVND + 'Đ';
    }    
}
