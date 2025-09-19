// Example of how to use the contact form API from your frontend

// 1. Function to submit contact form
async function submitContactForm(formData) {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        serviceInterested: formData.serviceInterested,
        projectDetails: formData.projectDetails
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// 2. Function to get all contact submissions (admin only)
async function getContactSubmissions(apiKey) {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
}

// 3. Function to update contact status (admin only)
async function updateContactStatus(id, status, apiKey) {
  try {
    const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({ status })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('Error updating status:', error);
    throw error;
  }
}

// 4. Function to delete a contact submission (admin only)
async function deleteContactSubmission(id, apiKey) {
  try {
    const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('Error deleting submission:', error);
    throw error;
  }
}

module.exports = {
  submitContactForm,
  getContactSubmissions,
  updateContactStatus,
  deleteContactSubmission
};