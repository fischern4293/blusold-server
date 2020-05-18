const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let credentials = JSON.parse(fs.readFileSync('credentials.json','utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowToObject(row) {
  return {
    title: row.title,
    description: row.description,
    id: row.id
  };
}


app.post('/blusolddb', (request, response) => {
  const query = 'INSERT INTO items (title,description) VALUES (?,?)';
  const params = [request.body.title,request.body.description];
  connection.query(query,params,(error, result) => {
    response.send({
      ok:true,
      id: result.insertId,
    });

  });
});

  app.patch('/blusolddb/:id', (request, response) => {
  const query = 'UPDATE items SET title = ?, description = ?,updatedAt = CURRENT_TIMESTAMP WHERE id = ?';
  const params = [request.body.title, request.body.description,  request.params.id];
  connection.query(query,params,(error, result) => {
    response.send({
      ok:true,
    
    });
  });
});




app.delete('/blusolddb/:id', (request, response) => {
  const query = 'UPDATE items SET published = 1, updatedAt = CURRENT_TIMESTAMP WHERE id = ?';
  const params =  [request.params.id];
  connection.query(query,params,(error, result) => {
    response.send({
      ok:true,

    });
  });
});


/*app.get('/blusolddb', (request, response) => {
  const query = 'SELECT title, description FROM items WHERE published = 0';
  const params = [request.params.id];
  connection.query(query,params,(error, rows) => {
    response.send({
      ok: true,
      items: rows.map(rowToObject),
    });
  });
});*/




app.get('/blusolddb/', (request, response) => {
  const query = 'SELECT title, description,id FROM items';
  const params = [request.params];
  connection.query(query,params,(error, rows) => {
    response.send({
      ok: true,
      items: rows.map(rowToObject),
    });
  });
});


const port = 3443;
app.listen(port,() => {
  console.log(`Live on port ${port}!`);
});


