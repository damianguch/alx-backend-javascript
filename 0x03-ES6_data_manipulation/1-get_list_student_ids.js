const getListStudentIds = (listOfStudents) => (listOfStudents && Array.isArray(listOfStudents)
  ? listOfStudents.map((student) => student.id) : []);
export default getListStudentIds;
