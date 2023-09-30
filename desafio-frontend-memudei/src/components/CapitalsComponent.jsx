
const CapitalsComponent = ({name, minTemp, maxTemp}) => {
    
    return(
        <div>
  <ul>
    <li>
      <div >
        <p></p>
        <p>{minTemp}</p>
      </div>
      <div >
        <p ></p>
        <p>{maxTemp}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
    </li>
  </ul>
</div>
    )
}

export default CapitalsComponent