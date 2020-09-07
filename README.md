# NodeJS-MySQL
This are files that help a developer create their own SQL queries without having to deal with syntax.
For this projects there are **4** basic classes that help build the SQL Queries:
- Col
- Row
- Condition
- Conditions

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
  Columes  //each row carry a list of columns
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
list of Conditions //
spearte //
```
`spearte` can be only 2 types
1. `And`
2. `Or`

## Builder

**It's a static class returning only sql queries strings**
### Constructors
 - **Has no constructors**

### public static actions
1. `Insert` returns a sql insert string
  - (**string** table,**List Columes ** values) 

2. `Delete` return a sql delete string
  - (**string** table,**Condtion** condition) delete a rows from table with 1 Condition
  - (**string** table, **List < Condition >** conditions,**string** Condition_Type)//deletes rows from table with Multi Condtions

3. `Update` return a sql update string
 - (**string** table,**List< Col>** Updated_Values,**Condition** Condition) updates rows *Columns* by condition
 - (**string** table,**List< Col>** Updated_Values,**List< Condition<** Condition,**string** ConditionType) updates rows  Cloumes by multiple conditions

4. `Select` return a sql select string
  - (**string** table,**List< string >** Columes,**List< Condition >** Conditions) return rows with specific columes by conditions
  

 Condition_Type is the connector between multiple conditions and can be only:
 - `And`
 - `Or` 

# Getting Started
## this set of files are only for the access DB so you will need to follow this steps
1. Download the peoject and add the files to you project 
2. install the microsoft Access DB engine https://www.microsoft.com/en-us/download/details.aspx?id=13255
3. change in Access File the Data Source of your DB in the variable `ConnectionStr` ```Data Source=your_db_url.accdb```
4. enjoy 

# exemple how to use 
1 execute a command 
``` C#
string query="your query";
if(Access.Execute(query)){
//your query was a success
}
else{
//your query faild please use the Access.ExplaindError() function to get the Error message
}
```

2 fetching data 
```C#
string query="your query";
List<Row> table=Access.getObjects(query);
if(table!=null){
//your query was a success
}
else{
//your query faild please use the Access.ExplaindError() function to get the Error message
}
```

