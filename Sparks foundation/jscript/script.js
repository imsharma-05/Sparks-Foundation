let myBalance = parseInt(document.getElementById("myBalance").innerText);

function sendMoney(){
   var Name = document.getElementById("Name").value;
   var Amount = parseInt(document.getElementById("Amount").value);

   if (Amount > 90000) {
      alert("Transfer Limit Exceeded!!!")
   } else {
      var UserBankAccount = Name + "BankBalance";
      var finalAmount = parseInt(document.getElementById(UserBankAccount).innerHTML) + Amount;
      var myBalance = parseInt(document.getElementById("myBalance").innerText) - Amount
      document.getElementById("myBalance").innerText = myBalance
      document.getElementById(UserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${Amount} is sent to ${Name}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${Amount} is sent with Email-id ${Name}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
