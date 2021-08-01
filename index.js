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
let customToppings = $("#toppings option:selected").val();
let customFlavor = $("#flavor option:selected").val();
let customquantity = $("#number").val();
let customSize = $("#size option:selected").val();
let customCrust = $("#crust option:selected").val();
let sizePrice, crustPrice, totalCost;
$("button.order").click(function () {
    $("button.order").hide();
    event.preventDefault();
    // let customSize = $("#size option:selected").val();
    // let customCrust = $("#crust option:selected").val();
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
    totalCost = sizePrice + crustPrice + (customToppings.length * 50);
    totalCost = totalCost * quantity;
    $("#pflavor").html(customFlavor);
    $("#psize").html(customSize);
    $("#pcrust").html(customCrust);
    $("#ptoppings").html(customToppings);
    $("#pnumber").html(quantity);
    $("#ptotal-cost").html(totalCost);
    console.log(totalCost);
});
$("button.delivery").click(function () {
    $(".table").hide();
    $(".delivery").slideDown(1000);
    $("button.delivery").hide();
    let deliveryAmount = totalCost + 200;
    console.log("You will pay sh. " + deliveryAmount + " on delivery");
    $("p#del").html("Your bill plus delivery fee is: " + deliveryAmount);
});
$("button.check-out").click(function () {
    let deliveryAmount = totalCost + 200;
    console.log("Your total bills is sh. " + deliveryAmount);

});
$("button.check-out").click(function () {
    event.preventDefault();
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    let deliveryAmount = totalCost + 200;
    if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#message").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount);
        $("#message").slideDown(1200);
    }
    else {
        alert("Please fill in the details for delivery!");
    }


});



