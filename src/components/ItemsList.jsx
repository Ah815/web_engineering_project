import React from 'react';

export default function ItemsList() {
  let abc = JSON.parse(localStorage.getItem('cartItems'));
  abc.map((item) => {
    console.log(item);
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-md">
      <h1 className="text-2xl mb-4">Your Items</h1>
      {abc.map((item) => (
        <p key={item.id}>
          {item.title} quantity: {item.qty}
        </p>
      ))}
      {/* <Link to="/a">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Change Order
        </button>
      </Link> */}
    </div>
  );
}
