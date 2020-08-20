import React from "react"
import VisibilitySensor from 'react-visibility-sensor'

import HTML from '../assets/html.png'
import Css from '../assets/css.png'
import JS from '../assets/js.png'
import react from '../assets/react.png'
import ruby from '../assets/ruby.svg'
import rails from '../assets/rails.png'
import sql from '../assets/sql.png'
import redux from '../assets/redux.png'
import jquery from '../assets/jquery.png'
import sass from '../assets/sass.svg'
import python from '../assets/python.svg'
import wordpress from '../assets/wordpress.svg'
 
function Skills(props) {
  return (
    <VisibilitySensor>
    {({isVisible}) => 
      <div className="skillbars">
        <figure class="chart" data-percent="90">
          <figcaption><p className="html-caption">HTML</p><p style={{marginTop: "0px", marginLeft: "-4px"}}>90%</p></figcaption>
          <img alt="HTML5" class="html" src={HTML}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on90" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="85">
          <figcaption><p className="css-caption">CSS 80%</p></figcaption>
          <img alt="CSS3" class="css" src={Css}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on80" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="75">
          <figcaption><p className="javascript-caption">JavaScript</p><p style={{marginTop: "0px", marginLeft: "-1px"}}>75%</p></figcaption>
          <img alt="Javascript" class="javascript" src={JS}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on75" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="70">
          <figcaption><p className="react-caption">React</p><p style={{marginTop: "0px", marginLeft: "-3px"}}>70%</p></figcaption>
          <img alt="React" class="react" src={react}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on70" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="65">
          <figcaption><p className="ruby-caption">Ruby</p><p style={{marginTop: "0px", marginLeft: "-3px"}}>65%</p></figcaption>
          <img alt="Ruby" class="ruby" src={ruby}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on65" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="65">
          <figcaption><p className="rails-caption">Rails</p><p style={{marginTop: "0px", marginLeft: "-1px"}}>65%</p></figcaption>
          <img alt="Rails" class="rails" src={rails}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on65" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="60">
          <figcaption><p className="sql-caption">SQL 60%</p></figcaption>
          <img alt="SQL" class="sql" src={sql}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on60" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="60">
          <figcaption><p className="redux-caption">Redux</p><p style={{marginTop: "0px", marginLeft: "-4px"}}>60%</p></figcaption>
          <img alt="redux" class="redux" src={redux}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on60" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="50">
          <figcaption><p className="jquery-caption">jQuery</p><p style={{marginTop: "0px", marginLeft: "-3px"}}>50%</p></figcaption>
          <img alt="jQuery" class="jquery" src={jquery}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on50" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="45">
          <figcaption><p className="sass-caption">Sass</p><p style={{marginTop: "0px", marginLeft: "-3px"}}>45%</p></figcaption>
          <img alt="Sass" class="sass" src={sass}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on45" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="40">
          <figcaption><p className="python-caption">Python</p><p style={{marginTop: "0px", marginLeft: "-4px"}}>40%</p></figcaption>
          <img alt="Python" class="python" src={python}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on40" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="30">
          <figcaption><p className="wordpress-caption">WordPress</p><p style={{marginTop: "0px", marginLeft: "-3px"}}>30%</p></figcaption>
          <img alt="WordPress" class="wordpress" src={wordpress}/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on30" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
        <figure class="chart" data-percent="30">
          <figcaption><p className="firebase-caption">Firebase</p><p style={{marginTop: "0px", marginLeft: "-2px"}}>30%</p></figcaption>
          <img alt="Firebase" class="firebase" src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"/>
          <svg width="80" height="85">
            <circle class={isVisible ? "outer off on30" : "outer off"} cx="160" cy="35.5" r="25" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
      </div>
    }
  </VisibilitySensor>

  )
}
 
export default Skills;