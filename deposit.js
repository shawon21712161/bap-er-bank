
    // step-1 add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2 get the deposit amount from the deposite input field.
        // for the input value use .value inside the deposite input field. 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString  = depositField.value;
    newDepositAmount = parseFloat(newDepositAmountString);
    


    // step-3 get the current deposite total.
    // for the non-input you should use innnerText.
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4 add number to set the total deposit.
    currentDepositAmount = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositAmount;

    // step-5 get the current total balance.

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    // step-6 calculate the current total balance.
    const currentBalancetotal = previousBalanceTotal+newDepositAmount;
    
    // set the balance total.
    balanceTotalElement.innerText= currentBalancetotal;

    //step-7 clear the deposit field. 
    depositField.value = '';
})


    



// Withdraw Field
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const withdrawAmount  = withdrawField.value;
//     console.log(withdrawAmount);
// })