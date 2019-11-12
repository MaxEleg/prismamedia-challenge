class FilterController{
  static sortByFilter(filter, array){
    if(filter === 'alphabetic') {
      array.sort(function(a, b){
        let nameA=a.title.toLowerCase();
        let nameB=b.title.toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1;
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      });
    }

    if(filter === 'notation') {
      array.sort(function(a, b){
        let valA=a.vote_average, valB=b.vote_average;
        if (valA < valB) //sort string ascending
          return -1;
        if (valA > valB)
          return 1;
        return 0; //default return value (no sorting)
      });
    }
    return array;
  }


  static filterByGender(gender, array) {
    if(gender === 'none')
      return array;

    array = array.map(item=>{
      item.disabled = !item.genre_ids.includes(gender);
      return item;
    });
    return array;
  }
  static filterByYear(year, array) {
    if(year === 'none')
      return array;

    array = array.map(item=>{
      item.disabled = item.date && item.date.toString() !== year.toString();
      return item;
    });
    return array;
  }
}

export {FilterController};