function PizzaOrder(size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
    this.quantity = number;
    this.price = 0;
};
pizzaSelectChange = function () {
    this.flavor = $("#flavor option:selected").val();
    document.getElementById("pflavor").innerHTML = this.flavor;
    console.log(this.flavor)
}
proportionSelectChange = function () {
    this.size = $("#size option:selected").val();
    document.getElementById("psize").innerHTML = this.size;
    console.log(this.size)
}
crustySelectChange = function () {
    this.crust = $("#crust option:selected").val();
    document.getElementById("pcrust").innerHTML = this.crust;
    console.log(this.crust)
}
toppySelectChange = function () {
    this.topping = $("#topping option:selected").val();
    document.getElementById("ptoppings").innerHTML = this.topping;
    console.log(this.topping)
}
quantitySelectChange = function () {
    this.quantity = $("#number").val();
    document.getElementById("pnumber").innerHTML = this.quantity;
    console.log(this.quantity)
}
totalSelectChange = function () {
    this.price = $("#ptotal-cost").val();
    document.getElementById("ptotal-cost").innerHTML = this.price;
    console.log(this.price)
}
$("#lets-order").on("submit", function (e) {
    //prevent default action
    e.preventDefault();
    let customToppings = $("#topping option:selected").val();
    let customFlavor = $("#flavor option:selected").val();
    let quantity = $("#number").val();
    let customSize = $("#size option:selected").val();
    let customCrust = $("#crust option:selected").val();
    // console.log(customToppings)
    // let sizePrice, crustPrice,  ,totalCost;
    if (customToppings == "pinapple") {
        customToppings = 200
    }
    else if (customToppings == "pepper") {
        customToppings = 100
    }
    else if (customToppings == "mushroom") {
        customToppings = 250
    }
    else if (customToppings == "bacon") {
        customToppings = 300
    }
    if (customSize == "Extra large") {
        sizePrice = 1500;
    }
    else if (customSize == "Large") {
        sizePrice = 1250;
    }
    else if (customSize == "Medium") {
        sizePrice = 600;
    }
    else if (customSize == "Small") {
        sizePrice = 500;
    } else {
        sizePrice = 0;
    }
    if (customCrust == "Thin") {
        crustPrice = 100;
    }
    else if (customCrust == "Thick") {
        crustPrice = 200;
    }
    else if (customCrust == "DoubleStack") {
        crustPrice = 250;
    }
    else {
        crustPrice = 0;
    }
    totalCost = sizePrice + crustPrice + (customToppings);
    totalCost = totalCost * quantity;
    $("#pflavor").html(customFlavor);
    $("#psize").html(customSize);
    $("#pcrust").html(customCrust);
    $("#ptoppings").html(customToppings);
    $("#pnumber").html(quantity);
    $("#ptotal-cost").html(totalCost);
    console.log(totalCost);
});

$("#check-info").on("click", function (e) {
    //prevent default action
    e.preventDefault();
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    let deliveryAmount = totalCost + 150;
    if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#message").append(person + ", We are processing your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount + ". It is inclusive the delivery fee and your order bill");
        $("#message").slideDown(1200);
    }
    else {
        alert("Please provide your delivery information!");
    }


});



