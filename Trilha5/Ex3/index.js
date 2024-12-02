"use strict";
class FavoriteManager {
}
class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super();
        this.movies = [];
    }
    addFavorite(favorite) {
        if (this.movies.includes(favorite)) {
            console.log("Filme já está nos favoritos.");
        }
        else {
            this.movies.push(favorite);
        }
    }
    getFavorite() {
        return this.movies.sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = [];
    }
    addFavorite(item) {
        this.favorites.unshift(item);
    }
    getFavorite() {
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
