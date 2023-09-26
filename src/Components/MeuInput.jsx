import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MeuInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative px-4 md:px-0 mt-6">
      <input
        className='bg-white  text-black px-4 py-2 w-full text-base'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button className="absolute right-5 top-0 mt-2 mr-2 px-1 py-1 bg-white text-black rounded flex items-center justify-center">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default MeuInput;
