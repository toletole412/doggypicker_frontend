import React from 'react';
import './Styles.css';
import ReactDisqusComments from 'react-disqus-comments';

export default class content2 extends React.Component {

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
                <h1 class="post_title">How to implement Disqus to React Web</h1>
                <div class="post_meta">
                  <div class="meta">
                    <div class="meta_inner ellipsis">
                      <div class="meta_datetime">
                        <i class="fa fa-clock-o" aria-hidden="true">
                        </i>
                        <time datetime="2017-11-13"> 2017.11.19</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post_contents">
                <div class="contents">
                  <div class="contents_inner">
                    <h2 id="what is discus">
                      <a href="#what is discus" class="headerlink"
                      title="what is discus">What is Discus</a>
                    </h2>
                    <a href="https://disqus.com/" target="_blank">Visit Discus</a>
                    <p>
                      Discus is the service which provides blog comment hosting
                      service. We can use this service when we make website easily.
                      When I start making this website, I wanted to use comments
                      service, and I found out many people all over the world
                      use this service.
                    </p>

                    <h2 id="create a new site">
                      <a href="#create a new site" class="headerlink"
                      title="create a new site">Create discus account</a>
                    </h2>
                    <img src="http://imagizer.imageshack.us/v2/320x240q90/924/LVjXQd.png" />
                    <p>
                      At this page, One thing to watch out is 'Website Name'.
                      This name will be 'shortname'. 'shortname' will be used in
                      widget code. Changing this shortname is impossible once
                      you made it.
                    </p>

                    <h2 id="Installation">
                      <a href="#Installation" class="headerlink"
                      title="Installation">Installation</a>
                    </h2>
                    <img src="http://imagizer.imageshack.us/v2/320x240q90/922/yLKfgm.png" />
                    <p>
                      If you use platform on your Website such as WordPress or Tumblr,
                      just click that. As I dont use platform, I scrolled down
                      and found 'Universal code'.
                      If you choose 'Universal code' then you can see below image.
                    </p>
                    <img src="http://imagizer.imageshack.us/v2/320x240q90/923/R49GPm.png" />
                    <p>
                    Many tutorial said that just copy that code and paste to my
                    code. and then boom! it will be successful. But unfortunately,
                    I failed to compile on React Web for some reason.

                    So I googled 'React disqus' and found way.
                    </p>

                    <b> React disqus comments </b>
                    <p>
                    install command: npm install react-disqus-comments <br />
                    <br />
                    At first I installed 'react-disqus-thread'. But I failed to
                    Compile. So I searched again, and I found that some people
                    made 'react-disqus-comments' component. This component is
                    kinda upgrade virsion of 'react-disqus-thread'. Two component
                    are almost same but 'react-disqus-comments' has less error.
                    </p>
                    <figure class="highlight js" data-lang="JS">
                      <table>
                        <tr>
                          <td class="gutter">
                            <pre class="hljs">
                              <code class="js">
                                <div class="line">1</div>
                                <div class="line">2</div>
                                <div class="line">3</div>
                                <div class="line">4</div>
                                <div class="line">5</div>
                                <div class="line">6</div>
                                <div class="line">7</div>
                                <div class="line">8</div>
                                <div class="line">9</div>
                                <div class="line">10</div>
                                <div class="line">11</div>
                                <div class="line">12</div>
                                <div class="line">13</div>
                                <div class="line">14</div>
                                <div class="line">15</div>
                                <div class="line">16</div>
                                <div class="line">17</div>
                                <div class="line">18</div>
                                <div class="line">19</div>
                                <div class="line">20</div>
                                <div class="line">21</div>
                                <div class="line">22</div>
                                <div class="line">23</div>
                              </code>
                            </pre>
                          </td>
                          <td class="code">
                            <pre class="hljs ruby">
                              <code class="js">
                                <div class="line">
                                  <span class="keyword">import React from 'react';</span><br />
                                  <span class="keyword">import ReactDisqusComments from 'react-disqus-comments';</span><br />
                                  <span class="keyword"></span><br />
                                  <span class="keyword">class App</span>
                                  <span class="keyword"> extends React.</span>
                                  <span class="keyword">Component</span>
                                  <span class="keyword"> {'{'} <b>// this line will be your customized component</b> </span><br />
                                  <span class="keyword">  handleNewComment(comment) {'{'}</span><br />
                                  <span class="keyword">  console.log(comment.text);</span><br />
                                  <span class="keyword"> {'}'} <b>// put this part upper your render()</b></span><br />
                                  <span class="keyword"></span><br />
                                  <span class="keyword">render() {'{'}</span><br />
                                  <span class="keyword">  return ( </span><br />
                                  <span class="keyword">     {'<'}ReactDisqusComments</span><br />
                                  <span class="keyword">      shortname="example" <b>// you can find your shortname on 'disqus/Admin/settings'</b> </span><br />
                                  <span class="keyword">      identifier="something-unique-12345"  </span><br />
                                  <span class="keyword">      title="Example Thread"  </span><br />
                                  <span class="keyword">      url="http://www.example.com/example-thread" <b>// your URL</b> </span><br />
                                  <span class="keyword">      category_id="123456"  </span><br />
                                  <span class="keyword">      onNewComment={'{this.handleNewComment}'}/>  </span><br />
                                  <span class="keyword">     );  </span><br />
                                  <span class="keyword">    {'}'} </span><br />
                                  <span class="keyword">   {'}'}  </span><br />
                                  <span class="keyword"></span><br />
                                  <span class="keyword">React.render({'<App/>'},document.getElementById('container'));</span><br />
                                  <span class="keyword"><b>//Only if you want to make independent disqus component</b></span>
                                </div>
                              </code>
                            </pre>
                          </td>
                        </tr>
                      </table>
                      <figcaption> {'<'}source: <a href="https://github.com/theplatapi/react-disqus-thread" target="_blank">github:theplatapi/</a>{'>'}</figcaption>
                    </figure>
                    <h2 id="And..">
                      <a href="#And.." class="headerlink"
                      title="And..">And..</a>
                    </h2>
                    <p>
                    I think that Using React-disqus-comments is
                    much easier than orginal installaion way for React Users.
                    And I also recommend 'react-disqus-comments' than
                    'react-disqus-thread'.

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
                          <a class="tags_tag-list-link" href="/tags/React">React, </a>
                        </li>
                        <li class="tags_tag-list-item">
                          <a class="tags_tag-list-link" href="/tags/disqus">disqus</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div class="post_attachment">
            <ReactDisqusComments
              shortname="//toretore.disqus.com/embed.js"
              identifier="something-unique-12345"
              title="Example Thread"
              url="http://www.torevelope.com/2017/11/19/develope.discus/"
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
