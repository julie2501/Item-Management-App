import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/api/items')
      .then(response => setItems(response.data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('/api/items', { name, description })
      .then(response => setItems([...items, response.data]));

    setName('');
    setDescription('');
  };

  const handleSearch = event => {
    event.preventDefault();

    axios
