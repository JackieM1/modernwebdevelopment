let hobbiesArray = ['listening to books', 'astronomy',
                    'learning', 'watching television'];

function printHobbies(passedArray)
{
    console.log(`I like ${passedArray.length} things`);
    for (let index=0; index < hobbiesArray.length; index++)
     {let element = hobbiesArray[index];
      console.log('I like ' + element)
     }
}

printHobbies(hobbiesArray);


let sportsArray = [
  {sportName:'Baseball', number:9, periodName:'innings'},
  {sportName:'Hockey', number:4, periodName:'quarters'},
  {sportName:'Football', number:4, periodName:'quarters'}
];

function printSports(passedArray)
{
 for (let index=0; index < passedArray.length; index++)
 {let element = passedArray[index];
  console.log(`${passedArray[index].sportName} is played in ${passedArray[index].number} ${passedArray[index].periodName}`)
}
}

printSports(sportsArray);