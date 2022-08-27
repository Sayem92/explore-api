// JavaScript Object Notation (JSON)

const user = { id : 1 , name : 'Gorib amir', job: 'Actor' };
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

// { id: 1, name: 'Gorib amir', job: 'Actor' }
// {"id":1,"name":"Gorib amir","job":"Actor"}

const shop = {
    owner : 'Alia',
    address : {
        street : 'Cocukhet voot ar goli',
        city : 'Ranbir',
        country : 'BD'
    },
    product : ['Labtop', 'monitor', 'mic', 'keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false,
};

const shopJSON = JSON.stringify(shop);
// console.log(shop);
// console.log(shopJSON);

// {
//     owner: 'Alia',
//     address: { street: 'Cocukhet voot ar goli', city: 'Ranbir', country: 'BD' },
//     product: [ 'Labtop', 'monitor', 'mic', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
//   }

//   {"owner":"Alia","address":{"street":"Cocukhet voot ar goli","city":"Ranbir","country":"BD"},"product":["Labtop","monitor","mic","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}


// convet string to object ---------------------------------

const objectJSON = JSON.parse(shopJSON);
console.log(objectJSON);

// {
//     owner: 'Alia',
//     address: { street: 'Cocukhet voot ar goli', city: 'Ranbir', country: 'BD' },
//     product: [ 'Labtop', 'monitor', 'mic', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
//   }