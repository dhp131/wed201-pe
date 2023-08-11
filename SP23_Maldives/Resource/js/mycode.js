function  displayPrice(){
    let displaySpan = document.getElementById('display');
    let selectTour = document.getElementById('tour');
    //console.log(selectTour.value);
    let valueTour = selectTour.value;
    let priceTour = 0;
    if(valueTour == "muine"){
        priceTour = 100;
    }else if(valueTour == "camau"){
        priceTour = 150;
    }else if(valueTour == "vungtau"){
        priceTour = 100;
    }else if(valueTour == "dalat"){
        priceTour = 120;
    }else{
        priceTour = 110;
    }
    displaySpan.textContent = `${priceTour}$/Person`;
}

function CalTotal() {
    let totalDiv = document.getElementById('total');
    let selectTour = document.getElementById('tour');
    //console.log(selectTour.value);
    let valueTour = selectTour.value;
    let priceTour = 0;
    if(valueTour == "muine"){
        priceTour = 100;
    }else if(valueTour == "camau"){
        priceTour = 150;
    }else if(valueTour == "vungtau"){
        priceTour = 100;
    }else if(valueTour == "dalat"){
        priceTour = 120;
    }else{
        priceTour = 110;
    }
    let numberPersonRaw = document.getElementById('number').value;
    //console.log(numberPerson);
    let numberPerson = parseInt(numberPersonRaw);
    let totalPrice = 0;
    totalPrice = numberPerson * priceTour;
    totalDiv.textContent = `Total amount: ${totalPrice}$ `;
}