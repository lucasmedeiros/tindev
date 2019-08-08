import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api';
import './Main.css';

function Main({ match }) {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await api.get('/devs', {
      headers: {
        user: match.params.id,
      },
    });
  
    setUsers(response.data);
  };
  useEffect(() => {loadUsers(match, setUsers)}, [match.params.id]);

  const removeDeveloperFromList = (developerId) => {
    setUsers(users.filter(user => user._id !== developerId))
  }

  const handleLike = async (id) => {
    await api.post(`devs/${id}/likes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    removeDeveloperFromList(id);
  }
  
  const handleDislike = async (id) => {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    removeDeveloperFromList(id);
  }

  return(
    <section className="main-container">
      <img src={logo} alt="Tindev" />
      {
        users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <img src={user.avatar} alt={user.name} />
                <footer>
                  <strong>{user.name}</strong>
                  <p>{user.bio || '---'}</p>
                </footer>

                <div className="buttons">
                  <button 
                    type="button"
                    onClick={() => handleDislike(user._id)} >
                    <img 
                      src={dislike} 
                      alt="Dislike" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLike(user._id)} >
                    <img
                      src={like}
                      alt="Like" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>Não há usuários disponíveis.</p>
          </div>
        )
      }
    </section>
  );
}

export default Main;