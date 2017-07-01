## Summary
This is a complete RESTFUL api using nodejs and expressjs which uses all http verbs(GET, POST, PUT, DELETE, PATCH). The sample schema i used is book,author etc to test the functionality.I implemented this backend functionality to integrate it with my app using MEANSTACK. It uses mongodb as the database to perform all these tasks. I used mongoose to provide validation and modeling layer to the app

**bookRoute.js**
This is the main file in Routes directory which contains the functionality of http verbs

**bookModels.js**
This file in models directory contains the moongoose schema for mongodb

**Usage**
Run mongodb and create a database called "restful_db" and collection named as "random" or use your own if you would like. Remember to changethe port you are running on. I have saved all the npm packages that will be needed in package.json. Go to the main directory and use

```
npm install
```

