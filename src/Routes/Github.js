import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
//import { Link } from 'react-router-dom';
import FooterJp from '../Layouts/Footer/FooterJp';

const Github = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [pageCount, setpageCount] = useState(2);
  const [pageValue, setpageValue] = useState(1);

  const fetchData = async () => {
    setloading(true);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${pageCount}`
    );
    const data = await response.json();
    setdata(data.items);
    setpageValue(data.total_count);
    setpageValue(2);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);
  console.log(data)

  return (
    <div id='github'>
      <h2 className='text-center my-4'>
        Trending Github Repositories created from 2021-08-13
      </h2>
      <Pagination
        className='m-auto justify-content-center d-flex mb-3'
        onChange={() => {
          setpageCount(pageCount + 1);
        }}
        count={pageValue}
      />
      {loading ? (
        <p className='text-center fs-2'>Loading...</p>
      ) : (
        <div className='container'>
          {data &&
            data.map((data) => (
              <div key={data.id}>
                <div className='d-flex' key={data.id}>
                  <img
                    className='img-fluid col-3 col-sm-4 col-md-2'
                    src={data.owner.avatar_url}
                    alt={data.description}
                  />
                  <div className='col-8 col-md-9 ms-4'>
                    <h2>{data.name}</h2>
                    <p>
                      {data.description
                        ? data.description
                        : 'Description Unavailable'}
                    </p>
                    <p>PROFILE: <a className='text-dark' href={data.owner.html_url} target="_blank" rel='noreferrer'>{data.owner.html_url}</a></p>
                    <div className='d-flex flex-row align-items-center'>
                      <p className='stars me-2 px-2 py-1'>
                        Stars: {data.stargazers_count}
                      </p>
                      <p className='issues me-2 px-2 py-1'>
                        Issues: {data.open_issues}
                      </p>
                      <p>
                        Submited on {(data.created_at).slice(0,10)} by:
                        <strong className='ms-2'>{data.owner.login}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>
      )}
      <FooterJp />
    </div>
  );
};

export default Github;
