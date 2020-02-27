#Preparing the database
//use these as a root
```sql
CREATE DATABASE dbshop;
CREATE USER dbshopper identified by 'dbpass';
USE shop;
grant all privileges on dbshop to dbshopper;
grant all privileges on dbshop.* to dbshopper;
```
#Webpages: use node server.js to start
//http://localhost:3001/add_products.html Here you can add new items 
//http://localhost:3001/ Here you can see the added items