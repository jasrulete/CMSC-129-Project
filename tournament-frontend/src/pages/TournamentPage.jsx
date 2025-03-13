import React, { useState } from 'react';

// Sample data for the tournament bracket
const initialMatches = [
  {
    id: 1,
    teamA: 'Team 1',
    teamB: 'Team 2',
    scoreA: 0,
    scoreB: 0,
    status: 'Upcoming',
  },
  {
    id: 2,
    teamA: 'Team 3',
    teamB: 'Team 4',
    scoreA: 0,
    scoreB: 0,
    status: 'Upcoming',
  },
  {
    id: 3,
    teamA: 'Team 5',
    teamB: 'Team 6',
    scoreA: 0,
    scoreB: 0,
    status: 'Upcoming',
  },
  {
    id: 4,
    teamA: 'Team 7',
    teamB: 'Team 8',
    scoreA: 0,
    scoreB: 0,
    status: 'Upcoming',
  },
];

const TournamentBracket = () => {
  const [matches, setMatches] = useState(initialMatches);

  const updateScore = (id, scoreA, scoreB) => {
    setMatches(
      matches.map((match) =>
        match.id === id
          ? { ...match, scoreA, scoreB, status: 'Completed' }
          : match,
      ),
    );
  };

  const resetScores = () => {
    setMatches(initialMatches);
  };

  return (
    <div
    style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    }}
    >
        <div
            style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px',
            width: '100%',
            }}
        >
            <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h2 style={{color:'black'}}>Tournament Bracket</h2>
            <div
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
                {matches.map((match) => (
                <div
                    key={match.id}
                    style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    color:'black',
                    // gap:''
                    }}
                >
                    <h4>{match.status}</h4>
                    <div
                    style={{ display: 'flex', justifyContent: 'space-between', }}
                    >
                    <div>
                        <strong>{match.teamA}</strong> vs{' '}
                        <strong>{match.teamB}</strong>
                    </div>
                    
                    <div>
                        {match.status === 'Completed' ? (
                        <span>
                            Score: {match.scoreA} - {match.scoreB}
                        </span>
                        ) : (
                        <div>
                            <input
                            type="number"
                            placeholder="Score A"
                            onChange={(e) =>
                                updateScore(match.id, e.target.value, match.scoreB)
                            }
                            style={{ width: '60px', marginRight: '5px' }}
                            />
                            <input
                            type="number"
                            placeholder="Score B"
                            onChange={(e) =>
                                updateScore(match.id, match.scoreA, e.target.value)
                            }
                            style={{ width: '60px' }}
                            />
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <button
                onClick={resetScores}
                style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#2575fc',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                }}
            >
                Reset Scores
            </button>
            </div>
        </div>
    </div>
  );
};

export default TournamentBracket;
