
# Backend Configuration

Communication between the server and the  client through the following API Configuration

###
| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/tickets     |                 | all tickets                               |  tickets array      
| GET    | /api/tickets/:id |                 | tickets with a particular id if it exists | tickets array       |
| POST   | /api/tickets      | { body }        | create a new ticket                      | tickets array       |
| PATCH  | /api/tickets/:id | { body }        | updated tickets                           | tickets array       |
| DELETE | /api/tickets/:id |                 | tickets deleted                           | tickets array       |

###

- The logic that interacts with the data is in the models folder under models.js.
- The routing folder holds all the router.js file that handles all the routing. 
- These files are in ES6 syntax and can be exported for use in any other folder.
- All communication to the server is handled through our models folder 
- Middleware is handled by Express and Morgan npm installation.

###

# Testing

- The routes.test.js file is where we have created the asynchronous tests to confirm communication between the server and the datbase are working as expected.
- Tested the Get, Post, Delete functions assuring they behave as expected.
- The tests also confirm that we get a 200 status Response
- Tests that response body is an object with the tickets in the right format.
- The schema for the table is saved under schema.sql with the table details, values, and insert paramaters.