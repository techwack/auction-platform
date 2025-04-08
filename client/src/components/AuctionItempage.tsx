import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const AuctionItem: React.FC = () => {
  const { id } = useParams();
  const [bid, setBid] = useState('');
  const [message, setMessage] = useState('');

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Bid of $${bid} placed successfully on item ${id}!`);
    setBid('');
  };

  return (
    <div>
      <h2>Auction Item #{id}</h2>
      <form onSubmit={handleBid}>
        <input
          type="number"
          placeholder="Enter your bid"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          required
        />
        <button type="submit">Place Bid</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
