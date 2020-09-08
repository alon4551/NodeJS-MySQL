# NodeJS-MySQL
This are files that help a developer create their own SQL queries without having to deal with syntax.
For this projects there are **4** basic classes that help build the SQL Queries:
- Colume
- Row
- builder
- Condition
- Conditions

# Getting Started
1. npm install sql_builder --save
2. install the microsoft Access DB engine https://www.microsoft.com/en-us/download/details.

## Class **Colume** 
Represent a *Column* in Database, each column has a value and a field name
has Props of:
```js
        Field //the field name of a colume
        Value //the value of the field (can be any value)
```

Constructor: 
- (**string** field, **object** value) create a new Column with the data

## Class **Row** 
Represent a Row in Database,each row has a list of Columns
Has Props of:
```js
  [] Columes  //each row carry a list of Columes
```
for the Constructor you need to send a list of Columes
## Condition
Represent a Conditions in a SQL Syntax Queries
Has props of:
```js
 Field
 Value
 Condition
```
The condition string can be only :
    - `=`
    - `!=`
    - `>`
    - `<`
    - `>=`
    - `<=`
    
## Conditions
represent a list of Conditions
has props of 
```js
[] Conditions // a list of Conditions
spearte // the type of list of Conditions
```
`spearte` can be only 2 types
1. `And`
2. `Or`

## Builder

**It's a static class returning only sql queries strings**
### Constructors
 - **Has no constructors**

### public static actions
1. `insert` returns a sql insert string
2. `_delete` return a sql delete string
3. `update` return a sql update string
4. `select` return a sql select string
