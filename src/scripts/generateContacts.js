import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  for (let i = 0; i < number; i += 1) {
    const content = createFakeContact();
    const currentContacts = await fs.readFile(PATH_DB, 'utf-8');
    const json = JSON.parse(currentContacts);
    json.push(content);
    const contact = JSON.stringify(json);

    await fs.writeFile(PATH_DB, contact, 'utf-8');
  }
};

await generateContacts(5);
