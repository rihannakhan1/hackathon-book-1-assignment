// Database utility module
let dbInstance = null;

// Function to set the database instance
const setDbInstance = (db) => {
  dbInstance = db;
};

// Function to get the database instance
const getDbInstance = () => {
  return dbInstance;
};

module.exports = {
  setDbInstance,
  getDbInstance
};