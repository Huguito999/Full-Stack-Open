const Total = (props) => {
    const { parts } = props;
  
    let total = 0;
  
    parts.forEach(part => {
      total += part.exercises;
    });
  
    return (
      <p>Number of exercises {total}</p>
    );
  };
  
  export default Total;
  