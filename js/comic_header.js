//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"

document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/logo.gif" alt="" /></a> 

        <div id="nav">
            <img src="./img/greenseal.png" alt="A green seal" style="width:30px;height:30px;"/>
            <a href="index.html">HOME</a> |
            <a href="archive.html">ARCHIVE</a> |
            <a href="characters.html">CHARACTERS</a> |
            <a href="about.html">ABOUT</a> |
            <a href="wip.html">WiPs.</a> |
            <a href="blog.html">BLOG</a> |
            <a href="misc.html">MISC.</a>
        </div>

        <div class="disclaimer">
           <p>Disclaimer: This site is intended primarily for desktop users with marginal support for mobile devices. Get on the computer, now!</p>
           <p>🏗️The site is also undergoing frequent changes.🏗️</p>
           <small>While not explicitly an adult site, if you are under the age of 18, you should be doing something else. Like killing people in Grand Theft Auto.</small>
        </div>

<hr>

    </header>
`;