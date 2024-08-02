Coding assignment using NodeJS and Postgres

Technologies to use

1. NodeJS
2. Postgres
3. TypeORM
4. NestJS.
5. Python for rest client

Expected time to finish: 2 Hours

1. Develop a REST service using NodeJS to accept JSON document attached in the document at the end and stores in Postgres. When the JSON document is posted separate JSON into three collections
   a. School
   b. Address
   c. Organization
   Save the attributes in the appropriate collection. Save the resulting address ID and organization ID into the School Document.

2. Modify some fields in the JSON document and except name and address fields and repost the document and it should update the same document. Lookup the school document with name and address record by address field and update the documents if exists or create new document
3. Create GET REST api to get the same JSON document by ID and also another GET API to get list of ALL schools
4. Create DELETE REST api to delete the school document by ID
5. Write python code to POST documents to the REST API
6. Create a Github repository with all the code and share the link.

JSON : {
"name": "School-A",
"status": "old",
"startTime": "8:30am",
"endTime": "1:30pm",
"shift": "Morning",
"address": {
"town": "Nehar Kot",
"tehsil": "Barkhan",
"district": "Barkhan",
"state": "Balochistan",
"address": "address-1",
"latitude": 29.79,
"longitude": 69.47
},
"hasProjector": false,
"hasLaptop": false,
"organization": {
"name": "publicschools"
}
},
