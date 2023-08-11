function customerBuy(){
    var phone = prompt('Please enter your phone number: ');
    if(phone.length !=0 && parseInt(phone) == phone){
        alert('We will contact to your number: ' + phone +' after 30 minutes')
    }
}