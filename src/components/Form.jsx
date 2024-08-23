import React, { useState } from 'react';
import ItemsList from './ItemsList';

export default function Form() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const handleClick = () => {
        if (name === '' || contact === '' || address === '') {
            alert('Please enter details');
        } else {
            alert(`${name}, your order has been dispatched. It will reach you in 30 minutes.`);
            setContact('');
            setName('');
            setAddress('');
        }
    };

    return (
        <div className="flex">
            <div className="w-1/2 p-4">
                <ItemsList />
            </div>
            <div className="w-1/2 p-4">
                <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-md">
                    <h1 className="text-2xl mb-4">Order Confirmation</h1>
                    <label htmlFor="name" className="block mb-4">
                        <span className="text-gray-700">Name</span>
                        <input
                            required
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                    <label htmlFor="contact" className="block mb-4">
                        <span className="text-gray-700">Contact</span>
                        <input
                            required
                            id="contact"
                            type="number"
                            placeholder="Enter contact"
                            value={contact}
                            onChange={(event) => setContact(event.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                    <label htmlFor="address" className="block mb-4">
                        <span className="text-gray-700">Address</span>
                        <input
                            required
                            id="address"
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                    <button
                        onClick={handleClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>

        </div>
    );
}
