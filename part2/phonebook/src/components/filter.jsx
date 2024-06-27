const Filter = ({filter, handleFilter}) => {
return (
    <div>
        <label>filter shown with</label>
        <input type="text" onChange={handleFilter} value={filter} />
    </div>
   )
   
}
export default Filter
    