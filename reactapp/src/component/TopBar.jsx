import React from 'react'

function TopBar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li><link to="/">Home</link></li>
        <Navlink to="/entertainment">Entertainment</Navlink>
        <li><link to="/sports">Sports</link></li>
        <li><link to="/politics">Politics</link></li>
      </ul>
    </div>
  )
}

export default TopBar
