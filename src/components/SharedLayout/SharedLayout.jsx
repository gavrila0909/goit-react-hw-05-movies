import { Outlet } from 'react-router-dom';
import { Link } from '../App.styled';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/" end>
            Home
          </Link>
           <Link to="/movies" > {/*nu pun END daca vreau sa se coloreze */}
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
