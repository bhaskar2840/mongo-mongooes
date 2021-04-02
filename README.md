# mongo-mongooes
- In this module we learn about the nosql db and that is the mongodb.

```cmd
touch app.js
npm init -y
npm i mongodb mongoose



```

> Then we will open the mongo db local server that we have on the computer by going to the path in `c/programfiles/mongodb/4.4/bin/mongo.exe`  buy double tapping it.

``` javascript

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

// test will replace the folder name i.e fruits in our case.



```
## DOCUMENTATION 
> for more learn with the link provided.
[https://mongoosejs.com/docs/index.html](click)
