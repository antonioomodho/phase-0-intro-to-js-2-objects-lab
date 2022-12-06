// Write your solution in this file!
const employee ={
    name : "Antonio",
    streetAddress : "Arboretum road"
};
function updateEmployeeWithKeyAndValue(object, key, value) {
    return{
      ...object,
      [key]:value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
  }
  
  let newEmployee;
  
  function deleteFromEmployeeByKey(object, key, value){
  
    let newEmployee = { ...object };
  
    newEmployee[key] = value;
  
    return newEmployee;
  }
  
  newEmployee = deleteFromEmployeeByKey (
    employee, key, value
  );
  deleteFromEmployeeByKey(key);
  
  function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    newEmployee = delete employee.key;
    delete employee[key];
    return employee;
  };