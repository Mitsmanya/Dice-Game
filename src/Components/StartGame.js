import './StartGame.css'

const StartGame = ({ toggle }) => {
  return (
    <container className="container">
        <img src='https://calc.amsi.org.au/wp-content/uploads/sites/15/2020/08/istock-172860119-scaled.jpg' alt="dice" />
        <div>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
    </container>
  )
}

export default StartGame