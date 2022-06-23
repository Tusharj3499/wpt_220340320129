
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


app.listen(8084,function(){

console.log("server listening port.......8083");

})


app.get('/booksinserted', function (req, res) {
    
    let input={bookid:req.query.bookid,bookname:req.query.bookname,price:req.query.price};

    let output={status:false};

    connection.query('insert into book value(?,?,?)',[input.bookid,input.bookname,input.price],
    (err,rows)=>{
        if(err)
        {
            console.log(err);

        }
        else
        {
            if(rows.affectedRows>0)
            {
                output.status=true;
                console.log(rows[0]);
                output.bookdetails=rows[0];

            }

        }
        res.send(output);


    });

    });

//booksdetails
    app.get('/booksdetails', function (req, res) {
    
        let input=req.query.bookid;
    
        let output={status1:false,bookdetails:{bookid:0,bookname:"",price:0}};
    
        connection.query('select  bookname,price from  book where bookid=?',[bookid],
        (err,rows)=>{
            if(err)
            {
                console.log(err);
    
            }
            else
            {
                if(rows.affectedRows>0)
                {
                    output.status1=true;
                    console.log(rows[0]);
                    output.bookdetails=rows[0];
    
                }
    
            }
            res.send(output);
    
    
        });
    
        });







