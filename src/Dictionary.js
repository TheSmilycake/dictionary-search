import React, { useState } from 'react';


export default function Dictionary(props) {
    const [searchText, setSearchText] = useState("");
    function updateSearch(event) {
        setSearchText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(searchText);
    }
   return (<div className="Dictionary">
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type word...' onChange={updateSearch}/>
            <input type={'submit'} value={'Search'}/>
        </form>
       <div>
           {searchText}
       </div>
    </div>);
}

// Dictionary.defaultProps = {
//
// }