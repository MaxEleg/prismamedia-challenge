
const defaultState = {
  movies:[],
  filteredMovies: [],
  bestMovies: [{
    title: 'Intestellar 1',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  },{
    title: 'Intestellar 2',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  },{
    title: 'Intestellar 3',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  },{
    title: 'Intestellar 4',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  },{
    title: 'Intestellar 5',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  },{
    title: 'Intestellar 6',
    date: '2014',
    img: 'http://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
  }]
};

export function reducer(state = defaultState) {
  return state;
}