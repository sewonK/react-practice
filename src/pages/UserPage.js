import { useRef, useState } from 'react';
import { CreateUser } from '../components/CreateUser';
import { UserList } from '../components/UserList';

const UserPage = () => {
  const [inputs, setInputs] = useState({ username: '', email: '' });
  const [users, setUsers] = useState([]);

  const { username, email } = inputs;

  const id = useRef(1);
  const nameInput = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = () => {
    const user = {
      id: id.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({ username: '', email: '' });
    id.current += 1;
    nameInput.current.focus();
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        user={inputs}
        focusInput={nameInput}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
};

export default UserPage;
