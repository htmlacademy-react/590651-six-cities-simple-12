import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import './not-found.scss';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Error!</title>
      </Helmet>
      <div className='not-found__wrapper'>
        <div className="not-found__content">
          <h1 className="not-found__title">404 Not Found</h1>
          <Link className="not-found__link" to='/'>Back to the main page</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
