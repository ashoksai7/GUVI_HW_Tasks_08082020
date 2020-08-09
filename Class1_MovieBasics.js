//Class 1: Movie -Basics
class Movie{
	constructor(title,studio,rating = "PG"){
		this.title = title;
		this.studio = studio;
		this.rating = rating;
	}
	
	static getPG = function (ar){
		let retar = ar.filter((item) => item.rating=="PG")
		return retar;
	}
	
	/*static function getPGdummy(ar){
		let retar = ar.filter((item) => item.rating=="PG")
		return retar;
	}Why error?*/ 
}

let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
let movie2 = new Movie("Titanic","Fox star studios");
let movie3 = new Movie("300","Warner bros","PG");
let movie_pg = Movie.getPG([movie1,movie2,movie3]);
console.log(movie_pg);
