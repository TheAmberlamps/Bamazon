# Bamazon
A node / mySQL project for coding class.

Upon running the program, the user is presented with the contents of the Bamazon database.

The user is then presented with an inquirer prompt asking them to input the item_id and the amount of the product they would like to purchase.

The program then checks to see if there is enough of the item in stock to satisfy the order. If not, a message to that effect is console logged and the connection is closed. However if there is enough of the item in stock to satisfy the request then the database is updated to reflect the new amount in stock, the total price of the order is displayed and the connection is closed.

You can find images illustrating this functionality in the images file of this repo.
