
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookFrom from './components/HookFrom'
// import ReusableFrom from './components/ReusableFrom/ReusableFrom'
// import RefFrom from './components/RefFrom/RefFrom'
// import StateFulFrom from './components/StateFulFrom/StateFulFrom'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'

function App() {

  // const handleSignUpSubmit = data => {
  //     console.log('Sign up data:', data);
      
  // }
  // const handleUpdateProfile = data => {
  //     console.log('Update profile data:', data);
      
  // }

  return (
    <>

      <h2>From Master</h2>

      <Grandpa></Grandpa>


      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}

      {/* <ReusableFrom fromTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableFrom>
      <ReusableFrom fromTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Profile Update</h2>
          <p>Please update your profile right now</p>
        </div>
      </ReusableFrom> */}
      
    </>
  )
}

export default App
