import React , {useState} from 'react';

const Search = ({onSearch}) => {
    const [input, setInput] = useState('');
    const onChange =(event) => {
      setInput(event.target.value);
    }

    const handleSearchClick = ()=> {
      onSearch(input);
    }
return (
  <div>
    <input type='text'value={input} onChange={onChange} ></input>
    <button onClick={handleSearchClick}> Search</button>
  </div>
)

}

export default Search;