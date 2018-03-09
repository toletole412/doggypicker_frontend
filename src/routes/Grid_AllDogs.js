import React from 'react';
import AllDogs from '../components/Alldogs'
import UpButton from '../components/thumbsUpButton'
import DislikeButton from '../components/dislikeButton'

import './Styles.css';



export default class Grid_AllDogs extends React.Component {
  render() {
    return (
    <main id="page-wrap">
      <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}
                 key={"b"}
                 _grid={{i: 'b',
                         x: 1,
                         y: 0,
                         w: 3,
                         h: 2,
                         minW: 2,
                         maxW: 4}}>
      <article className="post_mainland">
            <AllDogs />
            <UpButton />
            <DislikeButton />
            <br />
            <a href="/Grid_Match" rel="Match">Match </a>
            <a href="/Grid_Top10" rel="Top10">Top10</a>
      </article>
      </div>
    </main>
    );
  }
}
