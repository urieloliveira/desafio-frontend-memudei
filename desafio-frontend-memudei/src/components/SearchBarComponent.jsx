import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBarComponent = ( { value, onChange } ) => {
    return(
        <div>
            <input 
                type="text"
                placeholder="Insira aqui o nome da cidade"
                value={value}
                onChange={onChange}
            />
            <button>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    )
}

export default SearchBarComponent