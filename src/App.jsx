import { useState } from "react"

export default function App () {

  const [bill , setBill] = useState(0)
  const [myReview, setMyReview] = useState(0)
  const [friendReview, setFriendReview] = useState(0);

  function handleReset () {
    setBill(0);
    setMyReview(0);
    setFriendReview(0);
  }

  return (
    <>
      <Bill bill ={bill} setBill= {setBill} />
      <Percent> 
        
      <form>
        <label htmlFor="my-review">
          How do you Like the service ?
        </label>
        <select id="my-review" value={myReview} onChange={(e) => setMyReview(e.target.value)}
          
          >
            
          <option value="0">Dissatisfied ( 0%)</option>
          <option value="5">
            Its okay (5%)
          </option>
          <option value="10">
            It was good (10%)
          </option>
          <option value="20">
            absolutely amazing (20%)
          </option>
        </select>
      </form>
      </Percent>

      <Percent> 
      <form>
        <label htmlFor="friend-review">
          How do your friend Like the service ?
        </label>
        <select id="friend-review" value={friendReview} onChange={(e) => setFriendReview(e.target.value)}>
          <option value="0">Dissatisfied ( 0%)</option>
          <option value="5">
            Its okay (5%)
          </option>
          <option value="10">
            It was good (10%)
          </option>
          <option value="20">
            absolutely amazing (20%)
          </option>
        </select>
      </form>
      </Percent>

      <Payment bill={bill} myReview={myReview} friendReview={friendReview} />
      <Reset onHandleReset = {handleReset} />
    </>
  )
}

function Bill ({bill, setBill}) {
  //console.log(bill)
  return (
    <>
    <form >
      <label htmlFor="bill">How much was the bill ?</label>
      <input type="text" id="bill" className="border border-black"
      value={bill} 
      onChange={(e) => setBill(e.target.value)}
      />
    </form>
    </>
  )
}

function Percent ({children}) {
  return (
    <>
     {children}
    </>
  )
}

function Payment ({bill, myReview, friendReview}) {
  const avg = (Number(myReview) + Number(friendReview)) / 2
  console.log(avg);
  return (
    <>
      <h1>
        Your pay : ${Number(bill) + Number(avg)} ( ${bill} + ${avg} )
      </h1>
    </>
  )
}
function Reset ({onHandleReset}) {
  return (
    <>
    <button onClick={onHandleReset}>
      Reset
    </button>
    </>
  )
}