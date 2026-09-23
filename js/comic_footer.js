document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <div class="guestbookWrap">
          <iframe src="https://theamencorner.atabook.org/" height="900" title="Guestbook" class="guestbookFrame"></iframe>
        </div>

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

        <div class="footerWidgetRow footerBottomRow">
            <div class="footerWidgetSlot">
    <!-- Widget slot open — replacement coming -->
</div>

            <div class="footerWidgetSlotCenter">
                <!-- Widget 3 goes here, e.g. <ws-widget type="..." iid="..."></ws-widget> -->
            </div>

            <div class="footerWidgetSlot">
                <style type="text/css" media="screen">
                    #gr_grid_widget_1790166861 {
                        max-width: 220px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    #gr_grid_widget_1790166861 h2 {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 13px;
                        font-weight: bold;
                        margin: 0 0 8px;
                        color: #000000;
                        line-height: 1.3;
                    }
                    #gr_grid_widget_1790166861 h2 a {
                        color: #000000;
                    }
                    .gr_grid_container {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 4px;
                    }
                    .gr_grid_book_container {
                        width: 55px;
                        height: 85px;
                        padding: 0;
                        overflow: hidden;
                    }
                    .gr_grid_book_container img {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                    .gr_grid_branding {
                        display: block;
                        float: none !important;
                        font-size: 11px !important;
                        font-family: 'Open Sans', sans-serif !important;
                        margin-top: 6px;
                    }
                </style>
                <div id="gr_grid_widget_1790166861">
                    <h2>
                        <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/151275369-mister-anderson?shelf=currently-reading&utm_medium=api&utm_source=grid_widget">Currently reading</a>
                    </h2>
                    <div class="gr_grid_container">
                        <div class="gr_grid_book_container"><a title="The Lord of the Rings (The Lord of the Rings, #1-3)" rel="nofollow" href="https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings"><img alt="The Lord of the Rings" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33._SX50_.jpg" /></a></div>
                        <div class="gr_grid_book_container"><a title="The Last Wish (The Witcher, #0.5)" rel="nofollow" href="https://www.goodreads.com/book/show/40603587-the-last-wish"><img alt="The Last Wish" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529591917l/40603587._SX50_.jpg" /></a></div>
                        <div class="gr_grid_book_container"><a title="Lonesome Dove (Lonesome Dove, #1)" rel="nofollow" href="https://www.goodreads.com/book/show/256008.Lonesome_Dove"><img alt="Lonesome Dove" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559668037l/256008._SY75_.jpg" /></a></div>
                    </div>
                    <a class="gr_grid_branding" rel="nofollow" href="https://www.goodreads.com/user/show/151275369-mister-anderson">Mister Anderson's favorite books »</a>
                    <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Mister Anderson, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
                </div>
            </div>
        </div>

        <p class="footerTagline">Nobody here but us chickens.</p>

        <div class="poweredByBoxSmall">
          <ws-widget type="hc" iid="12887" settings></ws-widget>
          <p><strong>Powered by</strong></p>
          <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height="20" /></a>
        </div>

        <a href="#" id="backToTop" class="back-to-top">
        <img src="img/greenseal.png" alt="Top" style="width:20px;height:20px;" /> TOP ↑
</a>
    </footer>
`;

(function loadGoodreadsGridScript() {
    const script = document.createElement("script");
    script.src = "https://www.goodreads.com/review/grid_widget/151275369.Mister%20Anderson's%20currently-reading%20book%20montage?cover_size=small&hide_link=&hide_title=&num_books=20&order=a&shelf=currently-reading&sort=date_added&widget_id=1790166861";
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.getElementById("gr_grid_widget_1790166861").appendChild(script);
})();

window.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});