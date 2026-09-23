document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/logo.gif" alt="" /></a> 

        <div id="nav">
            <a href="index.html"><img src="./img/greenseal.png" alt="A green seal" class="nav-seal" style="width:30px;height:30px;"/></a>
            <a href="index.html">HOME</a> |
            
<div class="dropdown">
    <span class="dropbtn">COMICS ▾</span>
    <div class="dropdown-content">
        
        <div class="sub-dropdown">
<a href="archive.html"
   onmouseover="this.querySelector('.comicMenuIcon').src='./img/opalsmilefavicon.png';"
   onmouseout="this.querySelector('.comicMenuIcon').src='./img/opalfavicon.png';">
    <span class="comicMenuLabel">
        <img src="./img/opalfavicon.png" alt="" class="comicMenuIcon" />
        Ov Flask and Folly
    </span>
    <span class="subArrow">▸</span>
</a>
    <div class="sub-dropdown-content">
        <a href="archive.html">Archive</a>
        <a href="characters.html">Characters</a>
        <a href="wip.html">WiPs.</a>
    </div>
</div>

<div class="sub-dropdown">
<a href="metal-archive.html"
   onmouseover="this.querySelector('.comicMenuIcon').src='./img/metal_whoa.png';"
   onmouseout="this.querySelector('.comicMenuIcon').src='./img/metal.png';">
    <span class="comicMenuLabel">
        <img src="./img/metal.png" alt="" class="comicMenuIcon" />
        Straight Haze
    </span>
    <span class="subArrow">▸</span>
</a>
    <div class="sub-dropdown-content">
        <a href="metal-archive.html">Archive</a>
        <a href="metal-characters.html">Characters</a>
        <a href="metal-wip.html">WiPs.</a>
    </div>
</div>

    </div>
</div>

            <a href="about.html">ABOUT</a> |
            <a href="blog.html">BLOG</a> |
            <a href="misc.html">MISC.</a>
        </div>

        <div class="disclaimer">
           <p>Disclaimer: This site is designed for desktop. Get on the computer, now!</p>
           <p>🏗️ Currently under construction. 🏗️</p>
           <small>While this is not explicitly an adult site, if you are under the age of 18, you should be doing something else. Like killing people in Grand Theft Auto.</small>
        </div>

        <hr>
    </header>
`;

window.addEventListener('DOMContentLoaded', () => {
    // Mobile dropdown toggle handling
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
                dropdown.classList.toggle('mobile-open');
            }
        });

        // Close dropdown when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
                dropdown.classList.remove('mobile-open');
            }
        });
    }

    const titleRow = document.querySelector('.archiveTitleRow');
    if (!titleRow) return;

    if (!document.getElementById('linkIconLeft')) {
        const h1 = titleRow.querySelector('h1');
        if (h1) {
            const leftAnchor = document.createElement('a');
            leftAnchor.id = 'linkIconLeft';
            leftAnchor.href = 'characters.html';
            leftAnchor.innerHTML = '<img id="titleIconLeft" class="title-icon" alt="Character icon" style="width:50px;height:50px;"/>';

            const rightAnchor = document.createElement('a');
            rightAnchor.id = 'linkIconRight';
            rightAnchor.href = 'characters.html';
            rightAnchor.innerHTML = '<img id="titleIconRight" class="title-icon" alt="Character icon" style="width:50px;height:50px;"/>';

            titleRow.insertBefore(leftAnchor, h1);
            titleRow.appendChild(rightAnchor);
        }
    }

    const iconPools = {
        ofaf: {
            charactersPage: "characters.html",
            icons: [
                { name: "christoph", normal: "./img/christophfavicon.png", hover: "./img/christoph_shockedfavicon.png", alt: "Christoph icon" },
                { name: "opal", normal: "./img/opalfavicon.png", hover: "./img/opalsmilefavicon.png", alt: "Opal icon" },
                { name: "faolan", normal: "./img/faolanfavicon.png", hover: "./img/faolan_winkfavicon.png", alt: "Faolán icon" }
            ]
        },
        straightHaze: {
            charactersPage: "metal-characters.html",
            icons: [
                { name: "metal", normal: "./img/metal.png", hover: "./img/metal_whoa.png", alt: "Straight Haze icon" }
            ]
        }
    };

    const isStraightHazePage = window.location.pathname.includes('metal-');
    const activePool = isStraightHazePage ? iconPools.straightHaze : iconPools.ofaf;

    function applyIcon(imgId, linkId, character, charactersPage) {
        const img = document.getElementById(imgId);
        const link = document.getElementById(linkId);
        if (!img || !link) return;

        img.src = character.normal;
        img.alt = character.alt;
        img.onmouseover = () => { img.src = character.hover; };
        img.onmouseout = () => { img.src = character.normal; };

        const isCharsPage = window.location.pathname.includes(charactersPage);
        link.href = isCharsPage ? `#${character.name}` : `${charactersPage}#${character.name}`;
    }

    let leftIcon, rightIcon;
    if (activePool.icons.length >= 2) {
        const shuffled = [...activePool.icons].sort(() => Math.random() - 0.5);
        leftIcon = shuffled[0];
        rightIcon = shuffled[1];
    } else {
        leftIcon = activePool.icons[0];
        rightIcon = activePool.icons[0];
    }

    applyIcon("titleIconLeft", "linkIconLeft", leftIcon, activePool.charactersPage);
    applyIcon("titleIconRight", "linkIconRight", rightIcon, activePool.charactersPage);
});