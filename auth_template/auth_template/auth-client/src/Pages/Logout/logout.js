import axios from 'axios';

function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      // clear any local data related to user authentication
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;