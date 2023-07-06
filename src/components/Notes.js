import React, { useState } from 'react';

function Notes() {
    const [inputTask, setInputTask] = useState('');
    const [tasks, setTasks] = useState({
        todo: [],
        completed: []
    });

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasks({
            todo: [...tasks.todo, inputTask],
            completed: [...tasks.completed]
        });
        setInputTask('');
    };

    const handleDeleteTaskTodo = (item) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            todo: prevTasks.todo.filter((task) => task !== item)
        }));
    };
    const handleCompleteTaskTodo = (item) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            todo: prevTasks.todo.filter((task) => task !== item),
            completed: [...tasks.completed, item]
        }));
    };
    const handleDeleteTaskCompleted = (item) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            completed: prevTasks.todo.filter((task) => task !== item)
        }));
    };

    return (
        <div className="absolute z-20 w-[90%] flex justify-center h-screen top-20 left-20">
            <form
                className="relative m-10 bg-white shadow-sm h-14 rounded-xl w-72"
                onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Enter task here"
                    className="absolute border-2 top-3 left-3"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                />
                <button className="absolute p-1 px-2 text-white bg-blue-500 cursor-pointer rounded-xl right-6 top-2 hover:text-white hover:bg-green-500">
                    Add
                </button>
                <div className="mt-12 ml-3"></div>
            </form>
            <div className="m-10 overflow-auto bg-white shadow-sm rounded-xl w-72 h-72">
                <div className="w-10/12 mx-auto mt-3">
                    {tasks.todo.map((item) => (
                        <div
                            className="relative flex w-full my-1 bg-gray-200 rounded-md h-9"
                            key={item}>
                            <p className="flex items-center ml-3">{item}</p>
                            <button
                                className="absolute grid h-5 px-2 text-white bg-green-500 rounded-full right-10 top-2 place-content-center"
                                onClick={() => handleCompleteTaskTodo(item)}>
                                Complete
                            </button>
                            <button
                                className="absolute grid w-5 h-5 text-white bg-red-500 rounded-full right-2 top-2 place-content-center"
                                onClick={() => handleDeleteTaskTodo(item)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-10 bg-white shadow-sm rounded-xl w-72 h-72">
                <div className="w-10/12 mx-auto mt-3">
                    {tasks.completed.map((item) => (
                        <div
                            className="relative flex w-full my-1 bg-gray-200 rounded-md h-9"
                            key={item}>
                            <p className="flex items-center ml-3">{item}</p>

                            <button
                                className="absolute grid w-5 h-5 text-white bg-red-500 rounded-full right-2 top-2 place-content-center"
                                onClick={() => handleDeleteTaskCompleted(item)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
