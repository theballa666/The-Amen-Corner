let pg = Number(findGetParameter("pg"));

const maxpg = 3; //update this every time you add a new Metal Comic page

const folder = "img/metalcomics";
const image = "pg";
const imgPart = "_";
const ext = "png";

const thumbFolder = "img/metalthumbs";
const thumbExt = "png";
const thumbDefault = "default";

const navText = ["First","Previous","Next","Last"];
const navFolder = "img/comicnav";
const navExt = "png";
const navScrollTo = "#showComic";

if (pg == 0) {pg = maxpg;}

const pgData = [
    {
        pgNum: 1,
        title: "Temporary Substitute: Part 1", //replace with your actual title
        date: writeDate(2026, 9, 22), //replace with your actual upload date
        altText: "It's shit",
        imageFiles: 1,
        reactionName: "METAL001",
        commentName: "METAL001",
        authorNotes: `
            <p>Ridiculous.</p>
            `,
    },
    {
        pgNum: 2,
        title: "Temporary Substitute: The Sequel",
        date: writeDate(2026, 9, 22),
        altText: "Worthless",
        imageFiles: 1,
        reactionName: "METAL002",
        commentName: "METAL002",
        authorNotes: `
            <p>Jumping the shark here.</p>
            `,
    },
    {
        pgNum: 3,
        title: "Temporary Substitute: Last, But Not Least",
        date: writeDate(2026, 9, 22),
        altText: "Nothing of value",
        imageFiles: 1,
        reactionName: "METAL003",
        commentName: "METAL003",
        authorNotes: `
            <p>Disgusting.</p>
            `,
    },
];

function findGetParameter(parameterName) {
    let result = null, tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) {
    const date = new Date(year,month-1,day).toDateString().toString().slice(4);
    return date;
}