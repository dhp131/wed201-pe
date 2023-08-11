function CalTotal() {
    let checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
    //console.log(checkboxes);
    let itemsSelected = document.getElementById("item-selected");
    let totalPrice = 0;
    let totalDiv = document.getElementById("total");
    // //console.log(checkboxes);
    checkboxes.forEach(function(checkbox){
        let itemName = checkbox.nextSibling.textContent;
        //console.log(itemName);
        let li= document.createElement("li");
        li.textContent = itemName;
        itemsSelected.appendChild(li);
        console.log(checkbox.nextSibling.nextSibling.textContent);
        let priceItem = parseFloat(checkbox.nextSibling.nextSibling.textContent.charAt(0));
        totalPrice += priceItem;
        
        
    });
    // console.log(TotalPrice);
    totalDiv.textContent = `Total amount: ${totalPrice}`;
    totalDiv.style.backgroundColor = "orange";
}
