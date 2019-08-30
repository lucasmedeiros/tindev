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
      console.log(userId);
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
              css={{marginTop: "100px"}}
              sizeUnit={"px"}
              size={40}
              color={'#999'}
              loading={loading}
            />
        ) : (
          matches.length > 0 ? (
            <article>
              {matches.map(match => (
                <a
                key={match._id}
                href={`https://github.com/${match.user}`}
                target="_blank"
                rel="noopener noreferrer" >
                  <img src={match.avatar} alt={match.name} />
                  <footer>
                    <strong>
                      {match.name}
                      <span>({match.user})</span>
                    </strong>
                    <p>{match.bio || '---'}</p>
                  </footer>
                </a>
              ))}
            </article>
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