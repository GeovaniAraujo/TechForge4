abstract class FavoriteManager {
    abstract addFavorite(favorite: string):void;
    abstract getFavorite(): string[];
}

class MoviesFavoriteManager extends FavoriteManager{
    private movies: string[];

    constructor() {
        super();
        this.movies = [];
    }

    addFavorite(favorite: string): void {
        if(this.movies.includes(favorite)){
            console.log("Filme já está nos favoritos.")
        } else {
            this.movies.push(favorite);
        }
    }

    getFavorite(): string[] {
        return this.movies.sort();
    }

}

class BooksFavoriteManager extends FavoriteManager{
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    getFavorite(): string[] {
        return this.favorites;
    }
    
}

let movieManager = new MoviesFavoriteManager();

movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Interstellar");

console.log(movieManager.getFavorite());

let bookManager = new BooksFavoriteManager();

bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");
bookManager.addFavorite("Fahrenheit 451");

console.log(bookManager.getFavorite());