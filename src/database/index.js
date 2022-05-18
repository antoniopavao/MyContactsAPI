const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'teste',
  password: 'teste',
  database: 'mycontacts',
});

client.connect();

async function Query(query) {
  const { rows } = await client.query(query);
  return rows;
}
Query();
