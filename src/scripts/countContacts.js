import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const allContactsToString = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(allContactsToString).length;
};

console.log(await countContacts());
