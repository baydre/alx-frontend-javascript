export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDeparments(employees) {
      return Object.keys(employees).length;
    },
  };

  return reportObject;
}
