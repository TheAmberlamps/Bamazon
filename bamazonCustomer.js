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

    connection.query("SELECT * FROM products", function(err, results) {
        if(err) throw err;
        console.log("These are all the products that we have available at this time: \n")
        console.log(results);

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

    .then(function (inquirerResponse){
        var itNum = inquirerResponse.itemNumber;
        var ordNum = inquirerResponse.orderNumber;
        console.log(itNum);
        console.log(ordNum);


        // UPDATE products
        // SET has_pet = true, pet_name = "Franklin", pet_age 
        // WHERE item_id = itNum;

        connection.end();
        
});
});
});