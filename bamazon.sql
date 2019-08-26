DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptopComputer", "electronics", 750, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bedsideLamp", "lighting", 22, 64);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wok", "cooking", 63, 46);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cellphone", "electronics", 315, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hdmiCable", "electronics", 20, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ledBulb", "lighting", 14, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("whisk", "cooking", 7, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pressureCooker", "cooking", 155, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gardenHose", "lawn&garden", 37, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pressureWasher", "lawn&garden", 331, 18);