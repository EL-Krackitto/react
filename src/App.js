import React from 'react'
import Profile from './Profile/Component/Profile'

function App() {
  function handleName(fullName) {
    alert(fullName);
  }
  return (
    <div>
      <Profile
       fullName={"Samir"} profession={false} bio={"aaa"} handleName={handleName}>
      <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
      alt = "Profile"
      />
      </Profile>
    </div>
  )
}

export default App