import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api';
import './Main.css';
import ItsAMatch from '../components/ItsAMatch/ItsAMatch';
import { authService } from '../services/authService';
import { ClipLoader } from 'react-spinners';
import { SERVER_URL } from '../config';

function Main() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [matchDev, setMatchDev] = useState(null);

  const userId = authService.currentUserValue._id;

  useEffect(() => {
    const loadUsers = async () => {
      
      const response = await api.get('/devs', {
        headers: {
          user: userId,
        }
      });
  
      setUsers(response.data);
      setLoading(false);
    };

    loadUsers();
  }, [userId]);

  useEffect(() => {
    const socket = io(SERVER_URL, {
      query: { user: userId },
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });
  }, [userId]);

  const removeDeveloperFromList = (developerId) => {
    setUsers(users.filter(user => user._id !== developerId))
  };

  const handleLike = async (id) => {
    await api.post(`devs/${id}/likes`, null, {
      headers: {
        user: userId,
      }
    });

    removeDeveloperFromList(id);
  };
  
  const handleDislike = async (id) => {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user: userId,
      }
    });

    removeDeveloperFromList(id);
  };

  return(
    <main>
      <section className="main-container">
        {
          loading ? (
            <ClipLoader
              css={{marginTop: "100px"}}
              sizeUnit={"px"}
              size={40}
              color={'#999'}
              loading={loading}
            />
          ) : (
            users.length > 0 ? (
              <ul>
                {users.map(user => (
                  <li key={user._id}>
                    <img className="photos" src={user.avatar} alt={user.name} />
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