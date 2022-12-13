//=====================================================================================
//        commander


const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts");
const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const contactList = await contacts.listContacts();
            console.table(contactList);
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

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);

//================================================================
//          yargs

// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers");
// const contacts = require("./contacts");

// const invokeAction = async({action, id, name, email, phone}) => {
//     switch(action) {
//         case "list":
//             const contactList = await contacts.listContacts();
//             console.log(contactList);
//             break;
//         case "get":            
//             const oneContact = await contacts.getContactById(id);
//             console.log(oneContact);
//             break;
//         case "add":
//             const newContact = await contacts.addContact(name, email, phone); 
//             console.log(newContact)
//             break;
//         case "remove": 
//             const deleteContact = await contacts.removeContact(id);
//             console.log(deleteContact);
//             break;
//         default: 
//             console.log("Unknown action")
//     }
// }

// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);
// invokeAction(argv);
















//===================================================================

// const invokeAction = async({action, id, name, email, phone}) => {
//     switch(action) {
//         case "list":
//             const contactList = await contacts.listContacts();
//             console.log(contactList);
//             break;
//         case "get":
//             const oneContact = await contacts.getContactById(id);
//             console.log(oneContact);
//             break;
//         case "add":
//             const newContact = await contacts.addContact(name, email, phone); 
//             console.log(newContact)
//             break;
//         case "remove": 
//             const deleteContact = await contacts.removeContact(id);
//             console.log(deleteContact);
//             break;
//         default: 
//             console.log("Unknown action")
//     }
// }

// invokeAction({action: "list"})
// invokeAction({action: "get", id: "5"})
// invokeAction({action: "add", name: "jkmuf", email: "jkmuf@mail.com", phone: "123-45-67"})
// invokeAction({action: "remove", id: ""})