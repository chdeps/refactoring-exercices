// Exercice 1

/*
  Refactor isNot in is ?
*/

const methodA = ({ isNot } : { isNot : boolean }) => {
  if(!isNot){
    console.log('IS');
  } else {
    console.log('IS NOT');
  }
};


methodA({ isNot : false });
