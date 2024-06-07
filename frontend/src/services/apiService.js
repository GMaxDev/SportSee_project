/* eslint-disable no-undef */
import mockData from './data.json';
const baseURL = "http://localhost:3000";
const mock = false // le passer à true pour utiliser les data mock

export const fetchUserData = async (userId) => {
  if (mock) {
    return mockData.user[userId];
  } else {
    try {
      const response = await fetch(`${baseURL}/user/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
};

export const fetchUserActivity = async (userId) => {
  if (mock) {
    return mockData.user[userId].activity;
  } else {
    try {
      const response = await fetch(`${baseURL}/user/${userId}/activity`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user activity:', error);
      throw error;
    }
  }
};

export const fetchUserAverageSessions = async (userId) => {
  if (mock) {
    return mockData.user[userId].averageSessions;
  } else {
    try {
      const response = await fetch(`${baseURL}/user/${userId}/average-sessions`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user average sessions:', error);
      throw error;
    }
  }
};

export const fetchUserPerformance = async (userId) => {
  if (mock) {
    return mockData.user[userId].performance;
  } else {
    try {
      const response = await fetch(`${baseURL}/user/${userId}/performance`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user performance:', error);
      throw error;
    }
  }
};
