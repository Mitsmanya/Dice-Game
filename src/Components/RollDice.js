import './RollDice.css';

const RollDice = ({ rollDice, currentDice }) => {

  return (
    <main className="dice-container">
        <div className="dice-1" onClick={rollDice}>
          <img src={`/Dice-Game/images/dice/dice-${currentDice}.png`} alt="dice-1" />
        </div>
        <p>Click on Dice to Roll</p>
    </main>
  )
}

export default RollDice;

