// Exercice 1

const methodA = ({ is } : { is : boolean }) => {
  if(is){
    console.log('IS');
  } else {
    console.log('IS NOT');
  }
};

methodA({ is : true });
