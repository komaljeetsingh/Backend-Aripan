const express = require('express');
const Form = require('../models/Form'); // Adjust the path based on your project structure

const router = express.Router();

// Create a new event
const addForm = async (req, res) => {
    try {
      // Create a new form instance using all data from req.body
      const newForm = new Form(req.body);
  
      // Save the form to the database
      await newForm.save();
  
      res.status(201).json({ message: 'Form created successfully', form: newForm });
    } catch (error) {
      console.error('Error creating form:', error);
      res.status(500).json({ message: 'Error creating form', error: error.message });
    }
  };
  

const getForms = async (req, res) => {
    try {
      const forms = await Form.find(); // Retrieve all forms from the database
      res.status(200).json({ message: 'Forms retrieved successfully', forms });
    } catch (error) {
      console.error('Error fetching forms:', error);
      res.status(500).json({ message: 'Error fetching forms', error: error.message });
    }
  };


// Export the router
module.exports = {
    addForm,
    getForms,
  };