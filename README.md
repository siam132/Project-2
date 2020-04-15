# CISC4800-project2

## Simple Employee hiring app <br/>
## Able to Hire, Update, Lookup and Fire employees 

### Backend -- (Java Spring Boot) <br/>
### Frontend -- (React) <br/>
<br/>
<br/>
<br/>
<br/>

#### Endpoints 

GET <br/>
/api/v1/employees/ -> findAll() <br/>
<br/>
GET <br/>
/api/v1/employees/{id} -> findById() <br/>
<br/>
POST <br/>
/api/v1/employees/ -> addNew() <br/>
<br/>
PUT <br/>
/api/v1/employees/{id} -> updateById() <br/>
<br/>
DELETE <br/>
/api/v1/employees/{id} -> deletebyId() <br/>
<br/>
<br/>



Request Format  <br/>

body: json <br/>

{ <br/>
    "firstName": "John", <br/>
    "lastName": "Doe", <br/>
    "emailId": "JohnDoe@mail.com", <br/>
    "phone_no": "000-000-0000", <br/>
    "address": "140 Beacker Street", <br/>
}


