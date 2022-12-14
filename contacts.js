const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function listContacts() {
    try {
        const res = await fs.readFile(contactsPath);
        return JSON.parse(res);
    } catch (error) {
        console.log(error.message);
    }    
}

async function getContactById(contactId) {
    try {
        const contacts = await listContacts();    
        const res = contacts.find(item=>item.id===contactId);
        return res || null;
    } catch (error) {
        console.log(error.message);
    }    
}

async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const index = contacts.findIndex(item=>item.id===contactId);
        if (index===-1){ return null }
        const [res] = contacts.splice(index, 1);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return res;
    } catch (error) {
        console.log(error.message);
    }
    
}

async function addContact(name, email, phone) {
    try {
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
    } catch (error) {
        console.log(error.message);
    }
    
}

module.exports = {
    contactsPath,
    listContacts,
    getContactById,
    removeContact,
    addContact
}