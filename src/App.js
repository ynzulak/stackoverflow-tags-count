import React, { useState, useEffect } from 'react';
import TagList from './components/TagList';
import fetchTags from './services/api';


const App = () => {
  const [tags, setTags] = useState([]);
  const [perPage, setPerPage] = useState(30); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTags();
        setTags(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChangePerPage = (e) => {
    setPerPage(parseInt(e.target.value));
  };

  if (loading) return <div className='loading'><div>Loading...</div></div>;
  if (error) return <div className='loading'><div>Error: {error}</div></div>;

  return (
  <div className='main-app'>
    <div className='container'>
      <h1>StackOverflow Tags Browser</h1>
      <label htmlFor="perPage">Number of elements:</label>
      <input
        type="number"
        id="perPage"
        name="perPage"
        min="1"
        max='30'
        value={perPage}
        onChange={handleChangePerPage}
      />
      <TagList tags={tags.slice(0, perPage)} /> 
    </div>
    </div>
  );
};

export default App;
