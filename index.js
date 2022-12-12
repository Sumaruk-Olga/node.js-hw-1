
const contacts = require("./contacts");

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const contactList = await contacts.listContacts();
            console.log(contactList);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact(name, email, phone); 
            console.log(newContact)
            break;
        case "remove": 
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;
        default: 
            console.log("Unknown action")
    }
}

// invokeAction({action: "list"})
// invokeAction({action: "get", id: "cVdXT3LML7SSn9V_SbchP"})
// invokeAction({action: "add", name:"jkmuf", email:"jkmuf@mail.com", phone:"123-45-67"})
// invokeAction({action: "remove", id: "cVdXT3LML7SSn9V_SbchP"})