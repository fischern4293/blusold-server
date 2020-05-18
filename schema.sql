DROP TABLE IF EXISTS items;
  

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  published INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
~                                                                                                                                            
~                                                                                                                                            
~        