export class Movie {
  /*
  Sample JSON structure
  {
    "id": "aff76f34-2315-431e-9c97-e7d1f15ca7aa",
    "title": "Sharknado",
    "thumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTE2OTk4MTQzNV5BMl5BanBnXkFtZTcwODUxOTM3OQ@@._V1_SY1000_CR0,0,712,1000_AL_.jpg",
    "photo": "https://m.media-amazon.com/images/M/MV5BMjM1MzM4NTMxMV5BMl5BanBnXkFtZTcwMjYzNzk3OQ@@._V1_.jpg",
    "year": 2013,
    "sinopse": "When a freak hurricane swamps Los Angeles, nature's deadliest killer rules sea, land, and air as thousands of sharks terrorize the waterlogged populace.",
    "director": "Anthony C. Ferrante",
    "runtime": 86,
    "stars": "Tara Reid",
    "genre": "Action, Adventure, Comedy",
    "watched": false,
    "wishlist": false
  }
*/
  constructor(
    public uuid: string,
    public title: string,
    public thumb: string,
    public photo: string,
    public year: number,
    public sinopse: string,
    public director: string,
    public runtime: number,
    public stars: string,
    public genre: string,
    public watched: boolean,
    public wished: boolean) {
  }

}
