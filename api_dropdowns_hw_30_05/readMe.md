

# React Recap

1. React
2. Declarative
3. Dont repeat yourself - reuse
4. Vite / create-react-app
5. State
6. props
7. Stateless
8. Statefull
9. hooks ( useState, useEffect, useRef , customHooks? )
10. Component lifecycle ( mounting, updating, unmount ? )
11. code structure, components, services etc..
12. TS
13. React router dom

# Homework

## Create Login Page

1. UI - create form with the following inputs:

- email `string`
- password `string`

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/login

- payload `{ email:"email@gal.com", password:"1234a" }`
- response 200 ok, OR 401 Unauthorized

## Create Registration Page

1. UI - create form with the following inputs:

- email `string`
- password `string`
- password confirm `string`
- first name `string`
- last name `string`

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/register

- payload `{ email:"email@gal.com", password:"1234a", firstName:"gal", lastName:"am" }`
- response 200 ok, OR 409

### user for testing:

email: `dev@gmail.com`
password: `dev1234`