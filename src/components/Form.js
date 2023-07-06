import React, { useState } from 'react';

function Form() {
    const [grid, setGrid] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [likes, setLikes] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleUserSubmitForm = (e) => {
        e.preventDefault();

        const newItem = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            likes: likes
        };

        if (currentIndex !== null) {
            const updatedGrid = [...grid];
            updatedGrid[currentIndex] = newItem;
            setGrid(updatedGrid);
            setCurrentIndex(null);
        } else {
            setGrid([...grid, newItem]);
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setLikes('');
    };

    const handleNameClick = (index) => {
        const currentItem = grid[index];
        setFirstName(currentItem.firstName);
        setLastName(currentItem.lastName);
        setEmail(currentItem.email);
        setLikes(currentItem.likes);
        setCurrentIndex(index);
    };

    const handleDeleteClick = (e, index) => {
        e.preventDefault();
        const newGrid = [...grid];
        newGrid.splice(index, 1);
        setGrid(newGrid);
    };

    return (
        <div className="absolute top-0 left-0 flex w-full h-screen">
            <form
                className="w-3/12 py-3 mt-12 ml-12 bg-white rounded-lg shadow-xl h-min"
                onSubmit={(e) => handleUserSubmitForm(e)}>
                <h1 className="flex justify-center text-xl">
                    Tell us about yourself
                </h1>
                <div className="flex flex-wrap justify-between w-10/12 pt-3 mx-auto ">
                    <p>Name:</p>
                    <input
                        placeholder="first name"
                        className="w-5/12 pl-1 border-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        placeholder="last name"
                        className="w-5/12 pl-1 border-2"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap justify-between w-10/12 pt-3 mx-auto ">
                    <p>Email:</p>
                    <input
                        placeholder="email"
                        className="w-10/12 pl-1 border-2"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap justify-between w-10/12 pt-3 mx-auto ">
                    <p>Likes:</p>
                    <input
                        placeholder="what do you like?"
                        className="w-10/12 pl-1 border-2"
                        value={likes}
                        onChange={(e) => setLikes(e.target.value)}
                    />
                </div>
                <button className="w-2/12 p-3 mx-auto mt-6 ml-10 text-white bg-blue-500 rounded-xl hover:bg-green-500">
                    Submit
                </button>
            </form>
            <form className="w-7/12 py-3 mt-12 ml-12 bg-white rounded-lg shadow-xl h-[700px] overflow-auto">
                <div className="grid w-11/12 grid-cols-5 mx-auto font-semibold border-b-2">
                    <p>First Name</p>
                    <p className="bg-gray-100">Last Name</p>
                    <p>Email</p>
                    <p className="bg-gray-100">Likes</p>
                </div>
                {grid.map((item, index) => (
                    <div className="grid w-11/12 grid-cols-5 mx-auto border-b-[1px]">
                        <p onClick={() => handleNameClick(index)}>
                            {item.firstName}
                        </p>
                        <p
                            className="bg-gray-100"
                            onClick={() => handleNameClick(index)}>
                            {item.lastName}
                        </p>
                        <p onClick={() => handleNameClick(index)}>
                            {item.email}
                        </p>
                        <p
                            className="bg-gray-100"
                            onClick={() => handleNameClick(index)}>
                            {item.likes}
                        </p>
                        <button
                            className="text-white bg-red-500"
                            onClick={(e) => handleDeleteClick(e, index)}>
                            Delete
                        </button>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default Form;
