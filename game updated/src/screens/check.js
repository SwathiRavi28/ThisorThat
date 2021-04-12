import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Check(props) {
    const [users, setUsers] = useState([]);
    const [ischecked, setIsChecked] = useState(false)
    const [selectedusers, setSelectedUsers] = useState(false)
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));
        console.log(users);
        setUsers(
            users.map((user, index) => {
                return {
                    select: false,
                    name: user.name,
                    email: user.email,
                    id: index
                };
            })
        );
    }, []);


    const toggleCheckBox = (value) => {

        const tempUsers = users;
        console.log('value', value)

        for (let i = 0; i < tempUsers.length; i++) {
            if (tempUsers[i].id === value) {
                tempUsers[i].select = !tempUsers[i].select;
                console.log('selcted users', tempUsers);
                setUsers(tempUsers)
                return;
            }
        }


    }

    const saveSelectedUser = () => {
        const temp = users;
        var selectedUsers = [];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].select === true) {
                selectedUsers.push(temp[i].email)
            }
        }

        if (selectedUsers.length !== 2) {
            toast.warning("Please select 2 users", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton:'0.1px'
            });
            return;
        }
        temp.sort();
        localStorage.setItem('selectedUser', JSON.stringify(selectedUsers));
        props.history.push('/similarity')
    }


    return (
        <div className='min-h-screen bg-grey-100 text-gray-900 flex justify-center '>
             <ToastContainer />
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div>
<b><h5 className='text-2xl xl:text-3xl font-extrabold'style={{ marginLeft: "80px" }} >Players List</h5></b>

                        <div> {users.map((user, index) => <div key={index}>
                            
                            <span style={{color:'white', margin:'60px',backgroundColor:'#436EEE',padding:'2px',borderRadius:'4px'}} onClick={() => {
                                toggleCheckBox(user.id);
                                setIsChecked(!user.select)
                            }
                            } >
                                {user.select === false ? 'select' : 'unselect'}
                            </span>
                            <input type="checkbox" name="user" style={{ margin: "100px" }} checked={user.select} onChange={(event) => toggleCheckBox(event)} />
                            <span style={{ paddingTop: 0 }} key={index}>{user.name}</span>
                           
                        </div>
                        )}</div>
                    </div>

                    <button type="button" class="btn btn-secondary btn-lg" style={ {marginTop:'100px', backgroundColor:'#4d5366',font:''}}onClick={() => {
                        saveSelectedUser()

                    }}>Check Similairy</button>

                    
                </div></div></div>

    )
}

export default Check
