

## Create Login Page

1. UI - create form with the following inputs:

- email `string` +
- password `string` +

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/login

- payload `{ email:"email@gal.com", password:"1234a" }`
- response 200 ok, OR 401 Unauthorized

## Create Registration Page

1. UI - create form with the following inputs:

- email `string`+
- password `string`+
- password confirm `string`+
- first name `string`+
- last name `string`+

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/register

- payload `{ email:"email@gal.com", password:"1234a", firstName:"gal", lastName:"am" }`
- response 200 ok, OR 409

### user for testing:

email: `dev@gmail.com`
password: `dev1234`