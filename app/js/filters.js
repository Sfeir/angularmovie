"use strict";

angularMovieApp.filter('stars', function () {
    return function(starCount) {
        return new Array((starCount || 0) + 1).join("\u2605");
    };
});


angularMovieApp.filter('poster', function () {
    return function(href) {
        return href || "img/no-poster.jpg";
    };
});
