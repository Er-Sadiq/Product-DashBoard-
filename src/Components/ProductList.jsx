import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ProductList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('price'); // Default sort by price
  const [priceRange, setPriceRange] = useState('all');
  const [popularityRange, setPopularityRange] = useState('all');

  useEffect(() => {
    Axios.get("/api/interview-materials/products.json")
      .then((res) => {
        const productsData = res.data.products;

        if (productsData && typeof productsData === 'object') {
          const productsArray = Object.keys(productsData).map(key => ({
            id: key,
            ...productsData[key],
          }));
          setData(productsArray);
        } else {
          setError("Unexpected data format");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sortedData = [...data].sort((a, b) => {
      if (criteria === 'price') {
        return a.price - b.price;
      } else if (criteria === 'popularity') {
        return b.popularity - a.popularity;
      }
      return 0;
    });
    setData(sortedData);
  };

  const handleFilter = () => {
    let filteredData = [...data];

    // Filter by price range
    if (priceRange !== 'all') {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filteredData = filteredData.filter(product =>
        (minPrice ? product.price >= minPrice : true) &&
        (maxPrice ? product.price <= maxPrice : true)
      );
    }

    // Filter by popularity range
    if (popularityRange !== 'all') {
      const [minPop, maxPop] = popularityRange.split('-').map(Number);
      filteredData = filteredData.filter(product =>
        (minPop ? product.popularity >= minPop : true) &&
        (maxPop ? product.popularity <= maxPop : true)
      );
    }

    return filteredData;
  };

  const filteredData = handleFilter();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto my-1 p-4'>
  

      <div className='flex justify-center mb-4 gap-3 p-2 items-center'>
      <button
          onClick={() => handleSort('price')}
          className='bg-slate-700 text-white px-2 h-8 rounded-md mr-2 hover:bg-blue-500 mt-auto'
        >Sort by Price</button>

        <div className='mr-4'>
          <label className='block text-gray-700'>Price Range:</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className='bg-white border border-gray-300 rounded-md px-2 py-1'
          >
            <option value='all'>All</option>
            <option value='0-5000'>0 - 5000</option>
            <option value='5000-10000'>5000 - 10000</option>
            <option value='10000-20000'>10000 - 20000</option>
            <option value='20000+'>20000+</option>
          </select>
        </div>
        <div>
          <label className='block text-gray-700'>Popularity Range:</label>
          <select
            value={popularityRange}
            onChange={(e) => setPopularityRange(e.target.value)}
            className='bg-white border border-gray-300 rounded-md px-2 py-1'
          >
            <option value='all'>All</option>
            <option value='0-10000'>0 - 10000</option>
            <option value='10000-30000'>10000 - 30000</option>
            <option value='30000-50000'>30000 - 50000</option>
            <option value='50000+'>50000+</option>
          </select>
        </div>

        <button
          onClick={() => handleSort('popularity')}
          className='bg-slate-700 text-gray-50 px-2 h-8 mt-auto rounded-md hover:bg-blue-500'
        >
          Sort by Popularity
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredData.map((product) => (
          <div key={product.id} className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold mb-2'>{product.title}</h3>
            <p className='text-gray-700 mb-1'>Price: ${product.price}</p>
            <p className='text-gray-700'>Popularity: {product.popularity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
