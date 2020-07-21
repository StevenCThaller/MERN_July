// Write a function that, given an object, creates a string that
// represents a query to create a new row in a SQL database.

// Don't worry about the specifics of connecting to a database or anything.

// Example: objToSql(object, "cool_people"), where object is:
// {
//      name: "Cody",
//      email: "sthaller@codingdojo.com",
//      password: "ih8mondays"
// }
// Would return a string:
// `INSERT INTO cool_people (name, email, password) VALUES ("Cody", "sthaller@codingdojo.com", "ih8mondays");`
function objToSql(object, table){
    let keys = Object.keys(object);

    let query = `INSERT INTO ${table} (`;
    for(let i = 0; i < keys.length; i++){
        if(i < keys.length-1){
            query += `${keys[i]}, `;
        } else {
            query+= `${keys[i]}) VALUES (`;
        }
    }

    // let query = `INSERT INTO ${table} (${keys}) VALUES(`

    for(let i = 0; i < keys.length; i++){
        if(i < keys.length-1){
            if(typeof(object[keys[i]]) == "string" || typeof(object[keys[i]]) == "datetime"){
                query+= `"${object[keys[i]]}", `;
            }
            else {
                query += `${object[keys[i]]}, `;
            }
        } else {
            if(typeof(object[keys[i]]) == "string" || typeof(object[keys[i]]) == "datetime"){
                query += `"${object[keys[i]]}");`;
            }
            else {
                query += `${object[keys[i]]});`
            }
        }
    }

    return query;
}


console.log(objToSql({name: "Cody", email: "sthaller@codingdojo.com", password: "ih8mondays", age: 29}, "cool_peepz"));

