
import React, { useState } from 'react';

const PostAuction: React.FC = () => {
  const [title, setTitle] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTitle('');
    setStartingBid('');
  };

  return (
    <div>
      <h2>Post a New Auction Item</h2>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="Item Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Starting Bid"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
        /><br />
        <button type="submit">Post Item</button>
      </form>
      {success && <p>Item posted successfully!</p>}
    </div>
  );
};

export default PostAuction;
