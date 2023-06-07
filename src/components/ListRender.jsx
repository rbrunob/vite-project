import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Nome 1", "Nome 2", "Nome 3", "Nome 4"]);


    const [users, setUsers] = useState([
        { id: 0, name: "Nome 1" },
        { id: 1, name: "Nome 2" },
        { id: 2, name: "Nome 3" },
        { id: 3, name: "Nome 4" }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    };

    return (
        <>
            <ul>
                {list.map((item, index) => (
                    <li
                        key={index}
                        className='itemList'
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className='itemList'
                    >
                        {user.name}
                    </li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete Random User</button>
        </>
    )
}

export default ListRender;