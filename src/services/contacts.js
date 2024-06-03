import { contactsSchema } from '../db/models/Сontacts';

export const getAllContacts = async () => {
  const contacts = await contactsSchema.find();
  return contacts;
};

// export const getStudentById = async (studentId) => {
//   const student = await StudentsCollection.findById(studentId);
//   return student;
// };
