const Part = (props) => {
    console.log(props)
    const { name, exercises } = props.part;
    return (
        <>
        <p>{name} {exercises}</p>
        </>
    );
  };
  
  export default Part
  