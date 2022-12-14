const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts");
const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            try {
                const contactList = await contacts.listContacts();
                console.table(contactList);
            } catch (error) {
                console.log(error.message);
            }            
            break;
        case "get":
            try {
                const oneContact = await contacts.getContactById(id);
                console.log(oneContact);
            } catch (error) {
                console.log(error.message);
            }       
            break;
        case "add":
            try {
                const newContact = await contacts.addContact(name, email, phone); 
                console.log(newContact);
            } catch (error) {
                console.log(error.message);
            }            
            break;
        case "remove": 
            try {
                const deleteContact = await contacts.removeContact(id);
                console.log(deleteContact);
            } catch (error) {
                console.log(error.message);
            }            
            break;
        default: 
            console.log("Unknown action");
    }
}

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-p, --phone <type>", "user phone")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);