const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function listContacts() {
    const res = await fs.readFile(contactsPath);
    return JSON.parse(res);
}
  
async function getContactById(contactId) {
    const contacts = await listContacts();    
    const res = contacts.find(item=>item.id===contactId);
    return res || null;
}
  
async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(item=>item.id===contactId);
    if (index===-1){ return null }
    const [res] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return res;
}
  
async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

  module.exports = {
    contactsPath,
    listContacts,
    getContactById,
    removeContact,
    addContact
}