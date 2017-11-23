import React from 'react';
import './Styles.css';
import ReactDisqusComments from 'react-disqus-comments';


export default class content extends React.Component {

  handleNewComment (comment) {
		console.log(comment.text);
	}

  render() {
    return (
    <main id="page-wrap">
      <div class="wrapper">
        <div class="post">
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
                <h1 class="post_title">How to impliment Disqus to my Web</h1>
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
            <ReactDisqusComments
              shortname="toretore"
              identifier="something-unique-12345"
              title="Example Thread"
              url="http://torevelope.com/2017/11/13/place/"
              category_id="123456"
              onNewComment={this.handleNewComment}/>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
