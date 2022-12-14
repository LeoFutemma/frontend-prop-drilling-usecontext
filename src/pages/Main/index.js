import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import { UserProvider } from '../../contexts/UserContext';
import './styles.css';

export default function Main() {

  return (
    <div className="container-main">
      <UserProvider>
        <UsersRegister />
        <UsersList />
      </UserProvider>
    </div>
  );
}