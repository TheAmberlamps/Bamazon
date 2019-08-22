var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "3Dd13m4n",
    database: "bamazon"
  });

connection.connect(function(err) {
  if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

connection.query("SELECT * FROM products", function(err, res) {
  if(err) throw err;
    console.log("These are all the products that we have available at this time: \n")
    console.log(res);
    res.forEach(function(product){
      console.log(product.product_name);
    });

    inquirer
    .prompt([
        {
        type:"input",
        message:"Please enter the item id associated with the product you would like to order.",
        name:"itemNumber"
    },
    {
        type:"input",
        message:"How many of this item would you like to order?",
        name:"orderNumber"
    }
    ])

    .then(function (inquirerResponse) {
        var itNum = inquirerResponse.itemNumber;
        var ordNum = inquirerResponse.orderNumber;
        var chosenItem;

        for (var i=0; i < res.length; i++){
         
          if(res[i].item_id === parseInt(itNum)){
            chosenItem = res[i];
          }
        }
        
        if(chosenItem.stock_quantity > parseInt(ordNum)){

          var stock = res[i].stock_quantity;
          console.log("Stock: \n" + stock + "\n");
          var price = res[i].price;
          console.log("Price: \n" + price + "\n");
          var ordAmt = parseInt(ordNum);
          console.log("Order Amount: \n" + ordAmt + "\n");
          var totPrice = price * ordAmt;
          console.log("Total price of order: \n" + totPrice + "\n");
          var newAmt = stock - ordAmt;
          console.log("New Amount in Stock: \n" + newAmt + "\n");
          console.log("Updating " + res[i].product_name + " stock quantities...\n");
              
          connection.query(
            "UPDATE products SET ? WHERE ?\n",
            [
              {
                stock_quantity: newAmt
              },
              {
                item_id: parseInt(itNum)
              }
            ],
              
              function(err, res) {
                if (err) throw err;
                console.log("Order made!");       
                connection.end();
              }
              );
        }
        else {
          console.log("insufficient quantity available to process your order. :( \n");
          connection.end();}
    })
  })