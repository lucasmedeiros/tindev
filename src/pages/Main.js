import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api';
import './Main.css';
import ItsAMatch from '../components/ItsAMatch/ItsAMatch';

function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      });
  
      setUsers(response.data);
    };

    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id },
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  const removeDeveloperFromList = (developerId) => {
    setUsers(users.filter(user => user._id !== developerId))
  };

  const handleLike = async (id) => {
    await api.post(`devs/${id}/likes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    removeDeveloperFromList(id);
  };
  
  const handleDislike = async (id) => {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    removeDeveloperFromList(id);
  };

  return(
    <main>
      <section className="main-container">
        {
          users.length > 0 ? (
            <ul>
              {users.map(user => (
                <li key={user._id}>
                  <img src={user.avatar} alt={user.name} />
                  <footer>
                    <strong>
                      {user.name}
                      <span>({user.user})</span>
                    </strong>
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
              <p>Não há usuários disponíveis no momento :(</p>
            </div>
          )
        }
        { matchDev && (
          <ItsAMatch 
            dismissView={() => setMatchDev(null)}
            matchDev={matchDev} />
        )}
      </section>
    </main>
  );
}

export default Main;