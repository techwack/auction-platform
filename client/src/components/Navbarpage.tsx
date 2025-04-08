import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
