'use strict';

const transformToNumber = (str) => {
  return parseFloat(str.replace(/[$,]/g, ''));
};
const getEmployees = (list) => {
  return list.map((employee) => {
    return {
      name: employee.textContent.trim(),
      salary: transformToNumber(employee.getAttribute('data-salary')),
    };
  });
};
const SortList = (list) => {
  return list.sort((a, b) => b.salary - a.salary);
};

const employeesArray = Array.from(document.querySelectorAll('ul li'));
const employeesData = employeesArray.map((employee) => {
  getEmployees(employee);
});

SortList(employeesData);
