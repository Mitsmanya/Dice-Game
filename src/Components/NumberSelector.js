import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className="flex">
      {arrNumber.map((value, i) => (
          <Box 
            isSelected={value===selectedNumber}
            key={i} 
            onClick= {() => numberSelectorHandler(value)}>
            {value}
          </Box>))}
    </div>
    <p className="select">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.error{
  margin-left: 460px;
  color: red;
}
.flex{
  display: flex;  
  gap: 20px;
  line-height: 0px;
  min-width: 500px;
  margin-left: 420px;
}
.select{
  font-size: 24px;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 740px;
}`;

const Box = styled.div`
    height: 60px;
    width: 60px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 25px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    `;