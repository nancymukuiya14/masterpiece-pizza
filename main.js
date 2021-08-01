function PizzaOrder(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
    this.price = 0;
};
let sizePrice, crustPrice , totalCost;
$(document).ready(function() {
    $("button.order").click(function() {
        $("button.order").hide();
        event.preventDefault();
        var customFlavor = $("#flavor option:selected").val();
        var customSize = $("#size option:selected").val();
        var customCrust = $("#crust option:selected").val();
        var customToppings = $("#toppings option:selected").val();
    
        var quantity = $("#number").val();
        if (customSize == "Extra large"){
            sizePrice = 1400;
        }
        else if(customSize == "Large"){
            sizePrice = 1100;
        }
        else if(customSize == "Medium"){
            sizePrice = 800;
        }
        else if(customSize == "Small"){
            sizePrice = 600;
        }else{
            sizePrice = 0;
        }
        if (customCrust == "Thin"){
            crustPrice = 100;
        }
        else if(customCrust == "Thick"){
            crustPrice = 200;
        }
        else if(customCrust == "DoubleStack"){
            crustPrice = 250;
        }
        else{
            crustPrice = 0;
        }

      totalCost = sizePrice + crustPrice + (customToppings.length*50);
      totalCost= totalCost*quantity;
      $("#pflavor").html(customFlavor);
      $("#psize").html(customSize);  
      $("#pcrust").html(customCrust);
      $("#ptoppings").html(customToppings); 
      $("#pnumber").html(quantity);
      $("#ptotal-cost").html(totalCost);
        console.log(crustPrice);
        console.log(totalCost);
        console.log(sizePrice);
        console.log(quantity);
        console.log(customToppings);
        console.log(customFlavor);
        console.log(customSize);
        console.log(customCrust);
        $()
    });
    $("button.delivery").click(function(){
        $(".table").hide();
        $(".delivery").slideDown(1000);
        $("button.delivery").hide();
        let deliveryAmount= totalCost+200;
        console.log("You will pay sh. " + deliveryAmount + " on delivery");
        $("p#del").html("Your bill plus delivery fee is: "+deliveryAmount);
      });
      $("button.check-out").click(function(){ 
        let deliveryAmount= totalCost+200;
        console.log("Your total bills is sh. "+ deliveryAmount);
        
      });
      $("button.check-out").click(function(){
        event.preventDefault();
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();
      let deliveryAmount= totalCost+200;
      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#message").append(person +", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliveryAmount);
        $("#message").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
      }
    

    });
});
