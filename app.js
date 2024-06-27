function update(){
    let bill = document.getElementById("yourBill").value;
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;
    console.log(typeof bill)
}

let container = document.getElementById("container");
container.addEventListener('input', update);