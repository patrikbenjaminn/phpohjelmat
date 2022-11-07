create database shoppinglist;

use shoppinglist;

create table item(
    id int primary key AUTO_INCREMENT,
    description VARCHAR(255) not null,
    amount SMALLINT UNSIGNED NOT NULL
);

insert into item (description,amount) values ('Test item',1);