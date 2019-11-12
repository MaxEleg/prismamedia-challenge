export const copy = function(obj){
    return JSON.parse(JSON.stringify(obj));
};

export function chunkArray(myArray, chunk_size){
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index+chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

export function getDiffNumber(start, end){ // cette fonction retourne tous les nombres entre une intervalle
  const diff = [];
  for(let i = start; i <= end; i++){
    diff.push(i);
  }
  return diff;
}