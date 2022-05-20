const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'teste',
  password: 'teste',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
