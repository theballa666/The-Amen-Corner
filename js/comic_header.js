//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"

document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/logo.gif" alt="" /></a> 

        <div id="nav">
            <a href="index.html"><img src="./img/greenseal.png" alt="A green seal" class="nav-seal" style="width:30px;height:30px;"/></a>
            <a href="index.html">HOME</a> |
            
<div class="dropdown">
    <span class="dropbtn">COMICS ▾</span>
    <div class="dropdown-content">
        
        <!-- First Comic: Ov Flask and Folly -->
        <div class="sub-dropdown">
            <a href="#">Ov Flask and Folly ▸</a>
            <div class="sub-dropdown-content">
                <a href="archive.html">Archive</a>
                <a href="characters.html">Characters</a>
                <a href="wip.html">WiPs.</a>
            </div>
        </div>

        <!-- Second Comic: Untitled Metal Comic -->
        <div class="sub-dropdown">
            <a href="#">Untitled Metal Comic ▸</a>
            <div class="sub-dropdown-content">
                <a href="skully.html">Archive</a>
                <a href="skully.html">Characters</a>
                <a href="skully.html">WiPs.</a>
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

// Global Header Character Icon Script
window.addEventListener('DOMContentLoaded', () => {
    const titleRow = document.querySelector('.archiveTitleRow');
    if (!titleRow) return;

    // Inject the left and right icon anchor tags if they don't already exist
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

    const iconPool = [
        { name: "christoph", normal: "./img/christophfavicon.png", hover: "./img/christoph_shockedfavicon.png", alt: "Christoph icon" },
        { name: "opal", normal: "./img/opalfavicon.png", hover: "./img/opalsmilefavicon.png", alt: "Opal icon" },
        { name: "faolan", normal: "./img/faolanfavicon.png", hover: "./img/faolan_winkfavicon.png", alt: "Faolán icon" }
    ];

    function applyIcon(imgId, linkId, character) {
        const img = document.getElementById(imgId);
        const link = document.getElementById(linkId);
        if (!img || !link) return;

        img.src = character.normal;
        img.alt = character.alt;
        img.onmouseover = () => { img.src = character.hover; };
        img.onmouseout = () => { img.src = character.normal; };

        // If we are on characters.html, link to anchor. Otherwise, link to characters.html#[name]
        const isCharsPage = window.location.pathname.includes('characters.html');
        link.href = isCharsPage ? `#${character.name}` : `characters.html#${character.name}`;
    }

    const shuffled = [...iconPool].sort(() => Math.random() - 0.5);
    applyIcon("titleIconLeft", "linkIconLeft", shuffled[0]);
    applyIcon("titleIconRight", "linkIconRight", shuffled[1]);
});