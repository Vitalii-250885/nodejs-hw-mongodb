import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

  for (let i = 0; i < contacts.length; i += 1) {
    if (Math.random() >= 0.5) {
      contacts.splice(i, 1);
    }
  }
  await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
};

await thanos();
