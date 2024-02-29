
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

export const HomePage = () => {
  return (
    <Fragment>
       <Helmet>
        <title>React SEO | Home Page</title>
        <meta name="description" content="Description for Home Page"/>
      </Helmet>
      <h1>Home Page</h1>
      <h2>
        Integrate ReactJs and react-helmet-async - Manage SEO and Meta
        Data
      </h2>
    </Fragment>
  );
};
