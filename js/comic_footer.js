//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <div class="guestbookWrap">
          <iframe src="https://theamencorner.atabook.org/" height="900" title="Guestbook" class="guestbookFrame"></iframe>
        </div>
        <p>Nobody here but us chickens.</p> 

        <div class="footerWidgetRow">
            <ws-widget type="status" iid="13337"></ws-widget>

            <div class="footerLinksBox">
                <div class="discordSection">
                    <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener">
                        <img src="img/social/discord.png" alt="Discord" />
                    </a>
                    <p>Join the official server.</p>
                </div>

                <hr class="footerDivider" />

                <div class="socialLinks">
                    <a href="https://x.com/diarrhea_corpse" target="_blank" rel="noopener">
                        <img src="img/social/x.png" alt="X (Twitter)" />
                    </a>
                    <a href="https://letterboxd.com/the_balla" target="_blank" rel="noopener">
                        <img src="img/social/letterboxd.png" alt="Letterboxd" />
                    </a>
                    <a href="https://open.spotify.com/user/the_balla" target="_blank" rel="noopener">
                        <img src="img/social/spotify.png" alt="Spotify" />
                    </a>
                </div>
            </div>

            <ws-widget type="lastfm" iid="12842"></ws-widget>
        </div>

        <div>
          <ws-widget type="hc" iid="12887" settings></ws-widget>
        </div>
        <p><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
    </footer>
`;