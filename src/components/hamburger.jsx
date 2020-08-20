import React, {useState} from "react";

import './hamburger.css';

function Hamburger() {

  const [isActive, setIsActive] = useState(false)

  function handleActive() {
    setIsActive(!isActive)
  }
    // const { active, loading } = this.props;

    return (
      <div className="ham" onClick={() => handleActive()} style={{ position: "relative" }}>
        <div
          className={`hamburger-top ${isActive ? "active" : ""}`}
        />
        <div
          className={`hamburger-center ${isActive ? "active" : ""}`}
        />
        <div
          className={`hamburger-bottom ${isActive ? "active" : ""}`}
        />
      </div>
    );
}

// Hamburger.propTypes = {
//   active: PropTypes.bool,
//   loading: PropTypes.bool
// };

// Hamburger.defaultProps = {
//   active: false,
//   loading: false
// };

export default Hamburger;