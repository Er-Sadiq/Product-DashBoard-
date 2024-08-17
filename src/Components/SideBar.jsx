import React, { useState } from 'react';

function SideBar({ setPriceRange, setPopularityRange }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [price, setPrice] = useState([0, 50000]);
  const [popularity, setPopularity] = useState([0, 100000]);

  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPrice(value);
    setPriceRange(value);
  };

  const handlePopularityChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPopularity(value);
    setPopularityRange(value);
  };

  return (
    <div className='bg-slate-800 w-52 h-full text-gray-50 flex flex-col items-center rounded-md'>
      <h2 className='my-12 text-lg font-bold'>Product Dashboard</h2>
      <div className='flex flex-col gap-3 justify-center items-center w-52'>
        <button className='flex items-center gap-2 hover:bg-slate-700 px-4 py-2 w-full text-left'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          Home
        </button>
        <button className='flex items-center gap-2 hover:bg-slate-700 px-4 py-2 w-full text-left'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
          </svg>
          Search
        </button>

        {/* Filter Dropdown */}
        <div className='w-full'>
          <button onClick={toggleFilterDropdown} className='flex items-center justify-between w-full text-left px-4 py-2 hover:bg-slate-700'>
            Filter
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </button>
          {isFilterOpen && (
            <div className='bg-slate-700 w-full rounded-md mt-1'>
              <ul className='flex flex-col'>
                <li className='py-2 px-4 hover:bg-slate-600 cursor-pointer'>
                  <label>Price Range</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="50000" 
                    value={price.join(',')} 
                    onChange={handlePriceChange}
                    className="w-full mt-2"
                  />
                </li>
                <li className='py-2 px-4 hover:bg-slate-600 cursor-pointer'>
                  <label>Popularity Range</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100000" 
                    value={popularity.join(',')} 
                    onChange={handlePopularityChange}
                    className="w-full mt-2"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>

        <button className='flex items-center gap-2 hover:bg-slate-700 px-4 py-2 w-full text-left'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
          </svg> 
          Settings
        </button>
      </div>

      <div className='flex flex-col gap-1 justify-center items-center mt-auto my-4 text-sm'>
        <a href='#' className='hover:text-gray-400'>Help</a>
        <a href='#' className='hover:text-gray-400'>Contact Us</a>
      </div>
    </div>
  );
}

export default SideBar;
