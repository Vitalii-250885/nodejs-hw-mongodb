import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, '[]', 'utf-8');
};

await removeAllContacts();
