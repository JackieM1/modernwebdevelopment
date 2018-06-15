const hobbiesArray = [
    {name: 'breathing', lengthInYearsAtHobby: 52 },
    {name: 'walking', lengthInYearsAtHobby: 51 },
    {name: 'listening to recorded books', lengthInYearsAtHobby: 25 }
];

function printHobbyInfo(arrayName)
 {
    for (let index=0; index < arrayName.length; index++)
     {let element = arrayName[index]
      console.log(`${element.name} is done in ${element.lengthInYearsAtHobby}`)
     }
 }

printHobbyInfo(hobbiesArray);

