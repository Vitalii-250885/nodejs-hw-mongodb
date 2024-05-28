import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const allContactsToString = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(allContactsToString);
};

console.log(await getAllContacts());
