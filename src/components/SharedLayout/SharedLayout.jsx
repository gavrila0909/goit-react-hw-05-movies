import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from '../../Helpers/Link.styled';
import Loader from '../Loader/Loader';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">
            {' '}
            {/*nu pun END daca vreau sa se coloreze */}
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div><Loader/></div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
