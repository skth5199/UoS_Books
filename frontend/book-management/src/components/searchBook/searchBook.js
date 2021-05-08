import React from 'react';

function Search({onSearchClickHandler}) {
  const [inputValueState, setInputValueState] = React.useState({
    inputValues:{
      search : "",
      field : "search by"
    }
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const {inputValues}   = inputValueState;
    setInputValueState({
        inputValues: {
            ...inputValues,
            [name]: value.toLowerCase(),
        }
    })
  }
  
  const searchSubmitHandler = () =>{
    onSearchClickHandler(inputValueState.inputValues)
  }
    return (
      <>
       <input
              type="text"
              name="search"
              placeholder="Search book"
              className="focus:outline-none w-2/4 lg:w-3/5 xl:w-3/5 2xl:w-3/5 pt-3 pb-3 pl-4 rounded-l-full"
              onChange={handleChange}
            />
            <select 
              name="field" 
              id="select" 
              className="w-1/4 lg:w-1/5 xl:w-1/5 2xl:w-1/5 text-xs lg:text-base xl:text-base 2xl:text-base bg-white border-l border-gray-200 focus:outline-none pr-0 lg:pr-2 xl:pr-2 2xl:pr-2 pl-2 font-semibold"
              onChange={handleChange}
            >
              <option >Search By</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="category">Category</option>
              <option value="keyword">Keyword</option>
            </select>   
            <div
              onClick={searchSubmitHandler} 
              className="bg-gray-900 w-1/4 lg:w-1/5 xl:w-1/5 2xl:w-1/5 text-xs lg:text-lg xl:text-lg 2xl:text-lg flex items-center justify-center rounded-r-full  cursor-pointer hover:text-blue-500 rounded text-white  pr-2 pl-2 pt-2 pb-2 focus:outline-none">
                <p>Search Book</p>
            </div>  
      </>
    );
  }
  
  export default Search;
  