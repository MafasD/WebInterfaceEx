#Preparing the database

```sql
CREATE DATABASE shop;
CREATE USER shopper identified by 'shoppass';
USE shop;
grant all privileges on shop to shopper;
grant all privileges on shop.* to shopper;
```