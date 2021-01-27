import React from 'react';

interface IUser {
    name: string,
    email: string,
}

interface Props {
    user: IUser
}

const User: React.FunctionComponent<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br />
        </div>
    );
};

export default User;