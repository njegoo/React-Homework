import {RenderMovies} from './components/RenderMovies'

// import './components/render-movies-style.css'
import './components/render-movies-style.css'

let listOfMovies=[
  {name:'The Shawshank Redemption',
  date:1994,
  genre:'Drama',
  plot:'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didnt commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.',
  imdbLink:'https://www.imdb.com/title/tt0111161/',
  imgUrl:"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
  },
  {name:'The Godfather',
  date:1972,
  genre:'Crime',
  plot:'Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzos novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the dons youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.',
  imdbLink:'https://www.imdb.com/title/tt0068646/',
  imgUrl:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
  },
  {name:'The Dark Knight',
  date:2007,
  genre:'Action',
  plot:'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
  imdbLink:'https://www.imdb.com/title/tt0468569/',
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYwKPI0ElTgB62mUzgwdhPyIVo564Ij-k3GOzAPeSRd0Izdm9nhYVRcUcbPx4yJxedQc"
  },
  {name:'The Godfather Part II',
  date:1974,
  genre:'Crime',
  plot:'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917s Hells Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
  imdbLink:'https://www.imdb.com/title/tt0071562/',
  imgUrl:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {name:'12 Angry Men',
  date:1957,
  genre:'Drama',
  plot:'Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boys fate.',
  imdbLink:'https://www.imdb.com/title/tt0050083/',
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-e6z1UO64xTWyVX_4MVSkRpez0LJKis6mb0jO5TXKauS-tmz_o9mrgQ-NMamMFhP7gsc"
  }
];


export function App(){
  return(
    <div>
    <RenderMovies listOfMovies={listOfMovies}/>
    </div>
  )
}