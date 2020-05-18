DROP DATABASE IF EXISTS blusolddb;
DROP USER IF EXISTS blusold_user@localhost;

CREATE DATABASE blusolddb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER blusold_user@localhost IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON blusolddb.* TO blusold_user@localhost;
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                                                                                                            
~                                                 