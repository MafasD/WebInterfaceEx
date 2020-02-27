#Preparing the database
//use these as a root
```sql
CREATE DATABASE dbshop;
CREATE USER dbshopper identified by 'dbpass';
USE shop;
grant all privileges on dbshop to dbshopper;
grant all privileges on dbshop.* to dbshopper;
```