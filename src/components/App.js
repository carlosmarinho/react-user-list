import { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import User from './User';

function compare(a, b) {
  if (a.last_name > b.last_name) {
    return -1;
  }
  if (a.last_name < b.last_name) {
    return 1;
  }
  return 0;
}


function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([])

  const chooseUser = (choosedUser, usersToChoose) => {
    const userFetched = choosedUser;
    setUser([userFetched]);

    setUsers(usersToChoose.filter(u => u.pos !== userFetched.pos));
  }

  const _fetchUsers = () => {
    let usersFetched = fetchUsers();
    usersFetched = usersFetched.sort(compare).map((user, i) => ({ ...user, pos: i + 1 }));
    chooseUser(usersFetched[2], usersFetched)
  }

  useEffect(() => {
    _fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (users.length > 2) {
        chooseUser(users[2], users);
      }
      else {
        chooseUser(users[users.length - 1], users);
      }
    }, user[0] ? user[0].timeout * 1000 : 5000);

    return () => clearTimeout(timer);
  }, [users, user])

  if (!users.length) {
    return <h1>No users to be listed!</h1>
  }

  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {user.map(user => <li key={user.name}><User {...user} setUsers={setUsers} /></li>)}
      </ul>

    </>
  );
}

export default App;
