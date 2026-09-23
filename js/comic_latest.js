//comic_latest.js - shows one "latest page" card per comic series on the homepage.
//This is intentionally separate from comic_settings.js / metal_settings.js, since loading
//both of those together on one page would collide (they both declare the same variable names).
//
//IMPORTANT: update latestPage / latestTitle below whenever you add a new page to either comic.

const comicSeriesData = [
    {
        seriesName: "Ov Flask and Folly",
        latestPage: 3,
        latestTitle: "The Guy (Final Chapter)",
        thumbFolder: "img/thumbs",
        image: "pg",
        thumbExt: "png",
        thumbDefault: "default",
        readerPage: "read.html"
    },
    {
        seriesName: "Straight Haze",
        latestPage: 3,
        latestTitle: "Temporary Substitute: Last, But Not Least", //update once this page has a real title
        thumbFolder: "img/metalthumbs",
        image: "pg",
        thumbExt: "png",
        thumbDefault: "default",
        readerPage: "metal-read.html"
    }
];

writeLatestComics(".writeLatestComics");

function writeLatestComics(div) {
    document.querySelectorAll(div).forEach(function (container) {
        let html = "";

        comicSeriesData.forEach(function (series) {
            let thumb = series.thumbFolder + "/" + series.image + series.latestPage + "." + series.thumbExt;
            let thumbDefaultPath = series.thumbFolder + "/" + series.thumbDefault + "." + series.thumbExt;

            html += `
                <a class="latestComicCard" href="${series.readerPage}?pg=${series.latestPage}">
                    <h2>${series.seriesName}</h2>
                    <img src="${thumb}" alt="${series.latestTitle}" title="${series.latestTitle}" onerror="this.onerror=null;this.src='${thumbDefaultPath}';" />
                    <h3>${series.latestTitle}</h3>
                </a>
            `;
        });

        container.innerHTML = html;
    });
}