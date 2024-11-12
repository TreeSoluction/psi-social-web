import { API_URL } from "../enviroments/enviroment";

export const register = async (formData : any) => {
    try {
      console.log(JSON.stringify({user: {
        name: formData.value.name,
        email: formData.value.email,
        password: formData.value.password,
      } }));
      
      const response = await fetch(API_URL+"/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: formData.value})
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting form data:", error);
      throw error; 
    }
  };

  export const login = async (formData : any) => {
    try {
      console.log(JSON.stringify({
        email: formData.value.email,
        password: formData.value.password,
      }));
      
      const response = await fetch(API_URL+"/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: formData.value.email, password: formData.value.password})
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting form data:", error);
      throw error; 
    }
  };