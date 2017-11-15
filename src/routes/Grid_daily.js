import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Styles.css';



const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class Grid extends React.Component {


  render() {
    return (
      <div>
        <ResponsiveReactGridLayout className="layout"
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 3, md: 10, sm: 6, xs: 4, xxs: 2}}
          draggableCancel=".no-drag">

          <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}
                 key={"b"}
                 _grid={{i: 'b',
                         x: 1,
                         y: 0,
                         w: 3,
                         h: 2,
                         minW: 2,
                         maxW: 4}}>
            <div class="wrapper">
              <div class="home">
                <div class="home_inner">
                  <div class="home_articles">
                    <div class="articles">
                      <div class="articles_inner">
                        <ul class="articles_list clear">
                          <li class="articles_item">
                            <article class="articles_contents">
                              <div class="articles_header">
                                <h1 class="articles_title">
                                  <a href="#">광화문 날씨 좋은 날</a> </h1>
                                  <div class="articles_meta">
                                    <div class="meta">
                                      <div class="meta_inner ellipsis">
                                        <div class="meta_datetime">
                                          <i class="fa fa-clock-o" aria-hidden="true">
                                          </i>
                                          <time datetime="2017-07-12">2017.01.21</time>
                                      </div>
                                      <div class="meta_categories">
                                        <i class="fa fa-map-marker" aria-hidden="true">
                                        </i>
                                        <div class="meta_category-list">
                                            <a href="#" class="meta_category-list-item">food</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="articles_body">
                              <div class="contents">
                                <div class="contents_inner">
                                  <h2 id="tasty coffee">
                                    <a href="#tasty coffee" class="headerlink" title="tasty coffee"></a>
                                    "tasty coffee"
                                  </h2>
                                  <p> tasty coffee traies is below aldjfkajsdf</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li class="articles_item">
                          <article class="articles_contents">
                            <div class="articles_header">
                              <h1 class="articles_title">
                                <a href="/2017/11/13/place/">증산동 조용하고 맛있는 카페</a> </h1>
                                <div class="articles_meta">
                                  <div class="meta">
                                    <div class="meta_inner ellipsis">
                                      <div class="meta_datetime">
                                        <i class="fa fa-clock-o" aria-hidden="true">
                                        </i>
                                        <time datetime="2017-07-12">2017.11.13</time>
                                    </div>
                                    <div class="meta_categories">
                                      <i class="fa fa-map-marker" aria-hidden="true">
                                      </i>
                                      <div class="meta_category-list">
                                          <a href="#" class="meta_category-list-item">place</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="articles_body">
                            <div class="contents">
                              <div class="contents_inner">
                                <h2 id="tasty coffee">
                                  <a href="#tasty coffee" class="headerlink" title="tasty coffee"></a>
                                  "tasty coffee"
                                </h2>
                                <p> tasty coffee traies is below aldjfkajsdf</p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </ResponsiveReactGridLayout>
    </div>
    );
  }
}
