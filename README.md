# Amazing SQL Backend for Your E-commerce Site

## License

This product is open source and licensed under the MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

  This application represents the backend of an e-commerce site built with MySQL, Sequalize, and Express.
  Feel free to use this implementation in your application! 
  
## Table of Contents

1. [License](#license)
2. [Description](#description)
3. [Application](#application)
4. [Video](#video)
5. [Installation](#installation)
6. [Contributing](#contributing)
7. [Connect](#connect)

## Application

The application was built with MySQL and as such requires a MySQL database to connect to.
The application will run locally on port 3001 unless otherwise specified. 

## Video

This video shows the each route being executed in Insomnia and you can see the tables being updated in the MySQL Workbench.

## Installation

You must create a .env file and store your db authentication information in order to connect to your db
some commands to be aware of:

This will install the necessassary node dependencies
```bash
npm i
``` 

You can initialize the database from the db directory by using the mysql cli to source the schema
```bash
mysql -u "(your user name here)" -p
"(enter your password)"
```
once you are within the mysql cli enter the following commands
```mysql
source schema.sql
quit
```

Then the db can be seeded from the main directory
```bash
node seeds/index.js
```

## Contributing

This is an open source project.

## Connect

You can find more of my work at: [Joecode22](https://github.com/joecode22)

