import React, { useState } from 'react';

const CreateTournament = () => {
  const [tournamentData, setTournamentData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    maxPlayers: '',
    categories: [],
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTournamentData({ ...tournamentData, [name]: value });
  };

  const handleFileChange = (e) => {
    setTournamentData({ ...tournamentData, image: e.target.files[0] });
  };

  const addCategory = () => {
    setTournamentData({
      ...tournamentData,
      categories: [...tournamentData.categories, { type: '', value: '' }],
    });
  };

  const handleCategoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCategories = [...tournamentData.categories];
    updatedCategories[index][name] = value;
    setTournamentData({ ...tournamentData, categories: updatedCategories });
  };

  const removeCategory = (index) => {
    const updatedCategories = tournamentData.categories.filter(
      (_, i) => i !== index,
    );
    setTournamentData({ ...tournamentData, categories: updatedCategories });
  };

  const validate = () => {
    let tempErrors = {};
    if (!tournamentData.title) tempErrors.title = 'Title is required';
    if (!tournamentData.description)
      tempErrors.description = 'Description is required';
    if (!tournamentData.date) tempErrors.date = 'Date is required';
    if (!tournamentData.time) tempErrors.time = 'Time is required';
    if (!tournamentData.maxPlayers)
      tempErrors.maxPlayers = 'Max players is required';
    if (tournamentData.categories.length === 0)
      tempErrors.categories = 'At least one category is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission
    console.log('Tournament Data Submitted:', tournamentData);
    alert('Tournament Created Successfully!');
    setTournamentData({
      title: '',
      description: '',
      date: '',
      time: '',
      maxPlayers: '',
      categories: [],
      image: null,
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
        }}
      >
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto'}}>
          <h2 style={{color:'black'}}>Create Tournament</h2>
          <form onSubmit={handleSubmit}>
            {/* Tournament Title */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Title</label>
              <input
                type="text"
                name="title"
                value={tournamentData.title}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  color: 'white'
                }}
              />
              {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
            </div>

            {/* Description */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Description</label>
              <textarea
                name="description"
                value={tournamentData.description}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              {errors.description && (
                <p style={{ color: 'red' }}>{errors.description}</p>
              )}
            </div>

            {/* Date */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Date</label>
              <input
                type="date"
                name="date"
                value={tournamentData.date}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
            </div>

            {/* Time */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Time</label>
              <input
                type="time"
                name="time"
                value={tournamentData.time}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              {errors.time && <p style={{ color: 'red' }}>{errors.time}</p>}
            </div>

            {/* Max Players */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Max Players</label>
              <input
                type="number"
                name="maxPlayers"
                value={tournamentData.maxPlayers}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              {errors.maxPlayers && (
                <p style={{ color: 'red' }}>{errors.maxPlayers}</p>
              )}
            </div>

            {/* Categories */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Categories</label>
              {tournamentData.categories.map((category, index) => (
                <div
                  key={index}
                  style={{ display: 'flex', marginBottom: '10px' }}
                >
                  <input
                    type="text"
                    name="type"
                    placeholder="Category Type (e.g., Age, Weight)"
                    value={category.type}
                    onChange={(e) => handleCategoryChange(index, e)}
                    style={{
                      width: '48%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      marginRight: '2%',
                    }}
                  />
                  <input
                    type="text"
                    name="value"
                    placeholder="Category Value (e.g., 18-25)"
                    value={category.value}
                    onChange={(e) => handleCategoryChange(index, e)}
                    style={{
                      width: '48%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeCategory(index)}
                    style={{
                      marginLeft: '10px',
                      padding: '10px',
                      backgroundColor: 'red',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addCategory}
                style={{
                  padding: '10px',
                  backgroundColor: '#2575fc',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                Add Category
              </button>
              {errors.categories && (
                <p style={{ color: 'red' }}>{errors.categories}</p>
              )}
            </div>

            {/* Tournament Image Upload */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{color:'black'}}>Upload Tournament Image</label>
              <input
                type="file"
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
              }}
            >
              Create Tournament
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTournament;
