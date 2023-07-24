import './TotalScore.css'

const TotalScore = ({ score }) => {
  return (
    <div>
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  );
};

export default TotalScore