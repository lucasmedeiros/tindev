import React, {useState, useEffect} from 'react';
import './Matches.css';
import api from '../../services/api';
import { authService } from '../../services/authService';
import { ClipLoader } from 'react-spinners';

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = authService.currentUserValue._id;

  useEffect(() => {
    const loadMatches = async () => {
      const response = await api.get(`devs/${userId}/matches`, {
        headers: {
          user: userId,
        }
      });
      
      setMatches(response.data);
      setLoading(false);
    }

    loadMatches();
  }, [userId]);

  return(
    <section className="matches-container">
      {
        loading ? (
          <ClipLoader
              css={{"margin-top": "100px"}}
              sizeUnit={"px"}
              size={40}
              color={'#999'}
              loading={loading}
            />
        ) : (
          matches.length > 0 ? (
            <ul>
              {matches.map(match => (
                <li key={match._id}>
                  <a
                  href={`https://github.com/${match.user}`}
                  target="_blank" >
                    <img src={match.avatar} alt={match.name} />
                    <footer>
                      <strong>
                        {match.name}
                        <span>({match.user})</span>
                      </strong>
                      <p>{match.bio || '---'}</p>
                    </footer>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-matches">
              <p>Ainda não aconteceu nenhum match... :(</p>
            </div>
          )
        )
      }
    </section>
  );
}

export default Matches;