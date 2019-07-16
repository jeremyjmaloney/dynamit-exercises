-- CREATE THE TABLE --
-------------------------------------------------
CREATE TABLE TVPrices (TVModel VARCHAR(50), DateUpdated TIMESTAMP, Price MONEY);

-- SEED TABLE WITH DATA --
-------------------------------------------------
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Samsung v100', '2012-02-23 23:00:00', 549.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Sony x300', '2012-05-22 00:00:00', 359.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Samsung v100', '2013-01-22 10:20:00', 359.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Samsung v100', '2013-02-22 00:00:00', 399.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Sony x300', '2013-02-23 00:00:00', 329.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Samsung v100', '2013-02-23 21:30:00', 639.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Sony x300', '2013-05-23 22:00:00', 629.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Sony x300', '2013-05-23 22:00:00', 629.99);
INSERT INTO tvprices (tvmodel, dateupdated, price) VALUES ('Samsung z100', '2013-06-11 22:00:00', 879.99);

-- READ AND LIST THE TABLE --
-------------------------------------------------
SELECT * FROM tvprices;

tvmodel    |     dateupdated     |  price
--------------+---------------------+---------
Samsung v100 | 2012-02-23 23:00:00 | $549.99
Sony x300    | 2012-05-22 00:00:00 | $359.99
Samsung v100 | 2013-01-22 10:20:00 | $359.99
Samsung v100 | 2013-02-22 00:00:00 | $399.99
Sony x300    | 2013-02-23 00:00:00 | $329.99
Samsung v100 | 2013-02-23 21:30:00 | $639.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Samsung z100 | 2013-06-11 22:00:00 | $879.99
(9 rows)

-- READ AND LIST THE TABLE SORTED BY DATEUPDATED --
-------------------------------------------------
SELECT * FROM tvprices ORDER BY dateupdated DESC;

tvmodel    |     dateupdated     |  price
--------------+---------------------+---------
Samsung z100 | 2013-06-11 22:00:00 | $879.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Samsung v100 | 2013-02-23 21:30:00 | $639.99
Sony x300    | 2013-02-23 00:00:00 | $329.99
Samsung v100 | 2013-02-22 00:00:00 | $399.99
Samsung v100 | 2013-01-22 10:20:00 | $359.99
Sony x300    | 2012-05-22 00:00:00 | $359.99
Samsung v100 | 2012-02-23 23:00:00 | $549.99
(9 rows)

SELECT * FROM tvprices ORDER BY dateupdated ASC;

tvmodel    |     dateupdated     |  price
--------------+---------------------+---------
Samsung v100 | 2012-02-23 23:00:00 | $549.99
Sony x300    | 2012-05-22 00:00:00 | $359.99
Samsung v100 | 2013-01-22 10:20:00 | $359.99
Samsung v100 | 2013-02-22 00:00:00 | $399.99
Sony x300    | 2013-02-23 00:00:00 | $329.99
Samsung v100 | 2013-02-23 21:30:00 | $639.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
Samsung z100 | 2013-06-11 22:00:00 | $879.99
(9 rows)

-- RETURN A UNIQUE LIST OF TV MODELS AND THE MOST RECENT PRICE ASSOCIATED WITH EACH MODEL - BONUS: USE SINGLE QUERY --
-------------------------------------------------
SELECT DISTINCT ON (tvmodel) tvmodel, dateupdated, price FROM tvprices ORDER BY tvmodel, dateupdated DESC;

tvmodel    |     dateupdated     |  price
--------------+---------------------+---------
Samsung v100 | 2013-02-23 21:30:00 | $639.99
Samsung z100 | 2013-06-11 22:00:00 | $879.99
Sony x300    | 2013-05-23 22:00:00 | $629.99
(3 rows)
