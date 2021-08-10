# E-Commerce Backend

## Description

The back end for an e-commerce website, configured with Express.js using Sequelize to interact with a MySQL database. 



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)



## Installation

1. Clone the repository
2. Open a terminal at the root folder
3. Type `npm i`
4. Open a mysql shell at the root folder
5. Type `source db/schema.sql;` then `quit;`
6. In the terminal type `node seeds`


## Usage

[Demonstration Video](https://drive.google.com/file/d/1PCypMbZgiKmrHpW-RdSX7qaoA8ygQJPC/view)

Type `npm start` in the terminal

## Tests

Easily test the routes with Insomnia REST Client using the following route url's:

Note: replace `:id` with an id number

* Tags
    * POST - http://localhost:3001/api/tags
        * Body Format - {"tag_name": "Tag Name"}
    * GET all tags - http://localhost:3001/api/tags
    * GET tags by id - http://localhost:3001/api/tags/:id 
    * PUT update tag name by id - http://localhost:3001/api/tags/:id
        * Body Format - {"tag_name" : "Updated Tag Name"}
    * DELETE tag by id - http://localhost:3001/api/tags/:id 
* Categories
    * POST - http://localhost:3001/api/categories
        * Body Format - {"category_name": "Category Name"}
    * GET all categories - http://localhost:3001/api/categories
    * GET categories by id - http://localhost:3001/api/categories/:id
    * PUT update category name by id - http://localhost:3001/api/categories/:id
        * Body Format - {"category_name": "Updated Category Name"}
    * DELETE category by id - http://localhost:3001/api/categories/:id
* Products
    * POST - http://localhost:3001/api/products
        * Body Format - {
                        "product_name": "Product Test",
                        "price": 200.00,
                        "stock": 3,
                        "tagIds": [5]
                        }
    * GET all products - http://localhost:3001/api/products
    * GET product by id - http://localhost:3001/api/products/:id
    * PUT update a product's tag(s) - http://localhost:3001/api/products/:id
        * Body Format - {"tagIds": [1]}
    * DELETE product by id - http://localhost:3001/api/products/:id

## Questions

For any additional questions please reach out to me at:

[My Github Profile](https://github.com/AdrianCronin)

[Email](mailto:acronindev@gmail.com)

