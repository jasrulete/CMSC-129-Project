import React, { useState } from 'react';

const TournamentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    phone: '',
    participants: '',
    tournamentType: '',
    notes: '',
    file: null,
    registrationType: 'single', // New state for registration type
    players: [], // New state for players
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (formData.registrationType === 'single') {
      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.email.includes('@')) tempErrors.email = 'Invalid email';
      if (!formData.phone) tempErrors.phone = 'Phone number is required';
    } else {
      if (!formData.teamName) tempErrors.teamName = 'Team name is required';
      if (!formData.participants) tempErrors.participants = 'Number of participants is required';
      if (formData.players.length === 0) tempErrors.players = 'At least one player is required';
      if (formData.players.length > formData.participants) tempErrors.players = `Cannot exceed ${formData.participants} players`;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handlePlayerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPlayers = [...formData.players];
    updatedPlayers[index] = { ...updatedPlayers[index], [name]: value };
    setFormData({ ...formData, players: updatedPlayers });
  };

  const handlePlayerImageChange = (index, e) => {
    const updatedPlayers = [...formData.players];
    updatedPlayers[index].image = e.target.files[0];
    setFormData({ ...formData, players: updatedPlayers });
  };

  const addPlayer = () => {
    if (formData.players.length < formData.participants) {
      setFormData({ ...formData, players: [...formData.players, { name: '', email: '', phone: '', image: null }] });
    } else {
      alert(`Cannot add more than ${formData.participants} players.`);
    }
  };

  const removePlayer = (index) => {
    const updatedPlayers = formData.players.filter((_, i) => i !== index);
    setFormData({ ...formData, players: updatedPlayers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission
    console.log('Form Data Submitted:', formData);
    alert('Registration Successful!');
    setFormData({
      name: '',
      email: '',
      teamName: '',
      phone: '',
      participants: '',
      tournamentType: '',
      notes: '',
      file: null,
      registrationType: 'single',
      players: [],
    });
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
          color:'black'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', }}>
          Tournament Registration
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Registration Type */}
          <div style={{ marginBottom: '15px', }}>
            <label>Registration Type</label>
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                background: 'white'
              }}
            >
              <option value="single">Single Player</option>
              <option value="team">Team</option>
            </select>
          </div>

          {/* Conditional Fields for Single Player */}
          {formData.registrationType === 'single' && (
            <>
              {/* Full Name */}
              <div style={{ marginBottom: '15px',  }}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    background: 'white',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                  }}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div style={{ marginBottom: '15px', }}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: 'white'
                  }}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '15px',  }}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: 'white'
                  }}
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
              </div>
            </>
          )}

          {/* Conditional Fields for Team */}
          {formData.registrationType === 'team' && (
            <>
              {/* Team Name */}
              <div style={{ marginBottom: '15px', }}>
                <label>Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: 'white'
                  }}
                />
                {errors.teamName && <p style={{ color: 'red' }}>{errors.teamName}</p>}
              </div>

              {/* Number of Participants */}
              <div style={{ marginBottom: '15px',  }}>
                <label>Number of Participants</label>
                <input
                  type="number"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: 'white'
                  }}
                />
                {errors.participants && <p style={{ color: 'red' }}>{errors.participants}</p>}
              </div>

              {/* Players Information */}
              <div style={{ marginBottom: '15px', }}>
                <label>Players</label>
                {formData.players.map((player, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Player Name"
                      value={player.name}
                      onChange={(e) => handlePlayerChange(index, e)}
                      style={{
                        width: '48%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        background: 'white',
                        marginRight: '2%',
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Player Email"
                      value={player.email}
                      onChange={(e) => handlePlayerChange(index, e)}
                      style={{
                        width: '48%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        background: 'white',
                      }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Player Phone"
                      value={player.phone}
                      onChange={(e) => handlePlayerChange(index, e)}
                      style={{
                        width: '48%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        background: 'white',
                        marginTop: '10px',
                      }}
                    />
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handlePlayerImageChange(index, e)}
                      style={{
                        width: '48%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        background: 'white',
                        marginTop: '10px',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePlayer(index)}
                      style={{
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: 'red',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      Remove Player
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addPlayer} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#2575fc', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Add Player
                </button>
                {errors.players && <p style={{ color: 'red' }}>{errors.players}</p>}
              </div>
            </>
          )}

          {/* File Upload for Team Logo */}
          <div style={{ marginBottom: '15px', color: '#000' }}>
            <label>Upload Team Logo</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#2575fc',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default TournamentRegistration;