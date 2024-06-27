import Person from "./person"
  const FilteredPersons = ({filteredPersons}) => {
    return (
        <div>
           {filteredPersons.map((person, index) => (
            <Person key={index} person={person} />
            ))}
        </div>
       )
       
    }
    export default FilteredPersons
        