import axios from 'axios';




// const apiKey = '5reK1rFBMB7K8BufjPsNDL:1GLUWePWBu4mtDuYVtg86c';


const apiUrl = 'https://doviz-api.onrender.com/api/borsaAll';


export const getStockData = async () => {
  try {
    const response = await axios.get('https://doviz-api.onrender.com/api/borsaAll');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const getStockData = async () => {
//   try {
//     const response = await axios.get(apiUrl, {
//       headers: {
//         'authorization': `apikey ${apiKey}`,
//         'content-type': 'application/json'
//       }
//     });
//     return response.data
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/bist');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const favoritesFetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/favorites');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postData = async (sendData) => {
  try {
    const response = await axios.post('http://localhost:3000/favorites', sendData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/favorites/${id}`);
    return response.data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const postPortfolioNameData = async (sendData) => {
  try {
    const response = await axios.post('http://localhost:3000/portfoliosTitle', sendData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getPortfolioNameData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/portfoliosTitle');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};