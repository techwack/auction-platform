import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';

// Navbar
const Navbar: React.FC = () => (
  <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-10">
    <h1 className="text-2xl font-bold text-indigo-600">Auction House</h1>
    <div className="space-x-4 text-base">
      <Link to="/signup" className="text-gray-700 hover:text-indigo-600 transition">Signup</Link>
      <Link to="/signin" className="text-gray-700 hover:text-indigo-600 transition">Signin</Link>
      <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition">Dashboard</Link>
      <Link to="/post-auction" className="text-gray-700 hover:text-indigo-600 transition">Post Auction</Link>
    </div>
  </nav>
);

// Signup Page
const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signin');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">Create an Account</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="text" placeholder="Username" required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Email" required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" />
        <input type="password" placeholder="Password" required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Signup</button>
      </form>
    </div>
  );
};

// Signin Page
const Signin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">Welcome Back</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" />
        <input type="password" placeholder="Password" required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Login</button>
      </form>
    </div>
  );
};

// Dashboard Page
const Dashboard: React.FC = () => {
  const sampleItems = [
    { id: '1', name: 'Vintage Watch', currentBid: 120 },
    { id: '2', name: 'Old Camera', currentBid: 200 },
    { id: '3', name: 'Classic Painting', currentBid: 500 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Auction Dashboard</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleItems.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
            <Link to={`/auction/${item.id}`} className="text-xl font-semibold text-indigo-600 hover:underline block mb-2">
              {item.name}
            </Link>
            <p className="text-gray-500 text-sm">Current Bid: ₹{item.currentBid}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Auction Item Page
const AuctionItem: React.FC = () => {
  const { id } = useParams();
  const [bid, setBid] = useState('');
  const [message, setMessage] = useState('');

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`✅ Bid of ₹${bid} placed successfully on item #${id}`);
    setBid('');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Auction Item #{id}</h2>
      <form onSubmit={handleBid} className="space-y-4">
        <input
          type="number"
          placeholder="Enter your bid"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Place Bid</button>
      </form>
      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
};

// Post Auction Page
const PostAuction: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [startingBid, setStartingBid] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Auction posted: ${itemName} starting at ₹${startingBid}`);
    setItemName('');
    setStartingBid('');
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Post New Auction</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          placeholder="Starting bid"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Post Auction
        </button>
      </form>
    </div>
  );
};

// Main App
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pb-12">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auction/:id" element={<AuctionItem />} />
          <Route path="/post-auction" element={<PostAuction />} />
          <Route path="*" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
