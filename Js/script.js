const personalMovieDB = {
    count: 0,
    movies: {},
    actord: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("how much films did u see", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("how much films did u see", "");
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("one of the last", ""),
                  b = prompt("What is ur rating", "");
        
            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
             
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('too few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('u r tipical viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('u r good');
        } else {
            console.log('error');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {

            let genre = prompt(`your favorite genres in order ${i}`);

            if (genre === '' || genre == null) {
                console.log('incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i+ 1} - is ${item}`);
        });

    }

};
