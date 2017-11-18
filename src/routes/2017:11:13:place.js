import React from 'react';
import './Styles.css';

export default class content extends React.Component {

  render() {
    return (
      <div class="wrapper">
        <section class="post">
          <div class="post_header">
            <header class="header">
              <div class="header_inner clear">
                <div class="header_brand">
                  <div class="header_profile">
                    <a href="/profile">
                      <img class="header_picture" src="http://imagizer.imageshack.us/v2/280x200q90/922/OnNMZB.jpg"
                       alt="toretore's Picture" />
                    </a>
                  </div>
                  <div class="header_titles">
                    <a href="/">
                      <h1 class="header_title">toretore space</h1>
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="post_body">
            <article class="post_mainland">
              <div class="post_header">
                <h1 class="post_title">증산동 조용하고 맛있는 카페</h1>
                <div class="post_meta">
                  <div class="meta">
                    <div class="meta_inner ellipsis">
                      <div class="meta_datetime">
                        <i class="fa fa-clock-o" aria-hidden="true">
                        </i>
                        <time datetime="2017-11-13"> 2017.11.13</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post_contents">
                <div class="contents">
                  <div class="contents_inner">
                    <h2 id="증산동-커피생각-위치">
                      <a href="#증산동-커피생각-위치" class="headerlink"
                      title="증산동 커피생각 위치">"증산동 커피생각 위치"</a>
                    </h2>
                    <p>
                      커피생각은 증산역 1번 출구 근처에 위치해 있다. 이 근방에서 흔치 않게
                      3층짜리 건물이기 때문에, 쉽게 찾을 수 있다. 증산역에서 나와 오른쪽으로
                      고개를 돌려보면, 커피잔이 그려진 큰 건물이 보인다.
                    </p>
                    <p>
                      도보로는 1분이면 가고, 주위에 주차할 곳이 마땅치 않으니 차가 없이 오는 것이 좋다.
                    </p>
                  </div>
                </div>
                <div class="post_footer">
                  <div class="tags">
                    <div class="tags_inner ellipsis">
                      <i class="fa fa-tags" aria-hidden="true">
                      </i>
                      <ul class="tags_tag-list">
                        <li class="tags_tag-list-item">
                          <a class="tags_tag-list-link" href="/tags/Coffee">Coffee</a>
                        </li>
                        <li class="tags_tag-list-item">
                          <a class="tags_tag-list-link" href="/tags/Cafe">Cafe</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div class="post_attachment">
            <div id="disqus_thread"></div>
              <script>

              /**
              *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
              *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
              /*
              var disqus_config = function () {
              this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
              };
              */
              (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://www-torevelope-com.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();
              </script>
              <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
          </div>
            <script id="dsq-count-scr" src="//www-torevelope-com.disqus.com/count.js" async></script>
        </section>
      </div>
    )
  }
}
