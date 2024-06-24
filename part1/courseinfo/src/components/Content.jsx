import Part from "./Part"
const Content = (props) => {
    console.log(props)
    const {parts} =props
    
    return (
        <>
        {parts.map((part, index) => (
        <Part key={index} part={part} />
        ))}
        </>
    )
  }
  
  export default Content