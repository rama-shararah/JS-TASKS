let myObject = {firstName: "Rama", lastName: "Shararah", age: 22, salary: 2000}


function employeesInfo(obj){
    document.write(`The first name is:${obj.firstName} <br>
	The age is: ${obj.age} <br>
	The salary is: ${obj.salary}`
)
}
employeesInfo(myObject);