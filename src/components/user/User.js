import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/slice/user/user';

const User = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector( state => state.user)
    useEffect(()=>{
        dispatch(userActions.getUsersRequest())
    },[])

    const deleteUser = (id) => {
        dispatch(userActions.deleteUser(id));
    }

    if(error){
        return <div>Something went wrong!</div>
    }
    
    return (
        <div>
        {loading ? <div>loading...</div>: (
            <div className='list-users'>
                {users?.map( user => (
                    <div className='user-item' key={user.id}>
                        <h2>{user.name}</h2>
                        <button onClick={() => deleteUser(user.id)}>delete</button>
                    </div>
                ))}
            </div>
        )}        
        </div>
    )
}

export default User
