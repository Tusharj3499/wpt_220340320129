
const params={
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'jadhav',
	port:3306
}

const mysql = require('mysql2');
const connection=mysql.createConnection(params);

const express = require('express');
const app = express();

app.use(express.static('abc'));


app.listen(8086,function(){

console.log("server listening port.......8086");

})


app.get('/booksinserted', function (req, res) {
    
    let input={bookid:req.query.bookid,bookname:req.query.bookname,price:req.query.price};

    let output=false;

    connection.query('insert into book values(?,?,?)',[input.bookid,input.bookname,input.price],
    (err,rows)=>{
        if(err)
        {
            console.log(err);

        }
        else
        {
            if(rows.affectedRows>0)
            {
                output=true;
                console.log(rows[0]);
                output.bookdetails=rows[0];

            }

        }
        res.send(output);


    });

    });

//booksdetails
    app.get('/booksdetails', function (req, res) {
          connection.query('select * from book',[],
          (err,rows)=>{      
            res.send(rows);
        });

    });


        
    
     







