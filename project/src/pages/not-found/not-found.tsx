import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import './not-found.css';

export function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Error!</title>
      </Helmet>
      <div className='not-found__screen'>
        <div className="not-found__content">
          <h1 className="not-found__title">404 Not Found</h1>
          <img className="not-found__image" src="https://i.kym-cdn.com/entries/icons/original/000/019/277/confusedtravolta.jpg" width="800" height="450" alt="Confused Travolta"></img>
          <Link className="not-found__link" to="/">Back to the main page</Link>
        </div>
      </div>
    </>
  );
}
