const SearchBarComponent =({value, onChange}) => {
    return(
        <div>
            <input 
                type="text"
                placeholder="Insira aqui o nome da cidade"
                value={value}
                onChange={onChange}
            />
            <button>
                Search
            </button>
        </div>
    )
}

export default SearchBarComponent