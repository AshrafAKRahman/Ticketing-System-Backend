const { Pool } = require("pg");
// the Pool is a class from the pg module that can be used to create a connection pool to a PostgreSQL database.
if (process.env.POSTGRES_CONNECTION_URL === undefined) {
  console.log("POSTGRES_CONNECTION_URL is undefined")
}
// the if statement here is testing if the connection has been successful or not and if not to console log the error with the message: "POSTGRES_CONNECTION_URL is undefined"

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});
// the Pool is being created with the "new" keyword and is being passed a configuration object as an argument. This configuration object specifies the connectionString property, which is being set to the value of the POSTGRES_CONNECTION_URL environment variable. This variable should contain the connection string that specifies the host, port, and other details needed to connect to the Postgres database, but since this information is valuable and should remain private, it is pointing to the object which is the .env file.
//Once the pool variable has been created, we can use it to execute queries against the database and manage the connections in the pool. 
module.exports = {
  // the module object provides a simple interface for running SQL queries on a database using the pool object. The query function allows you to pass in a SQL query as a string, along with an optional params object containing values to be interpolated into the query. The function then returns the result of running the query on the database using the pool object.
  query: function (text, params) {
    return pool.query(text, params);
    // The text and params arguments are there because they are used by the pool.query() method to specify the SQL query to be executed and any additional parameters to be used in the query, respectively. The text argument specifies the text of the SQL query, while the params argument specifies any additional parameters, such as values to be used in place of placeholders in the query. These arguments are passed to the function when it is called, and they are used to provide the necessary information to the pool.query() method so that it can execute the correct SQL query with the correct parameters.
  },
  pool : pool
};