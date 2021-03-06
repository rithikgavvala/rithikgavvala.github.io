import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {

    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: "#F9A825" }}>
          <div className="scroll-text">Click Me</div>
          <button style ={{ background: "none", border: "none", color: "#F9A825" }} className="fa fa-chevron-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}


export default ScrollToNext;
