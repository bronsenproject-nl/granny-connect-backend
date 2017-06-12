CREATE SCHEMA grannyconnect;

-- setup user for grannyconnect
CREATE USER granny WITH PASSWORD '?granny!';

-- set right grants on schema grannyconnect
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA grannyconnect TO granny;
ALTER DEFAULT PRIVILEGES IN SCHEMA grannyconnect
  GRANT ALL PRIVILEGES ON TABLES TO granny;

-- careteam : careteams in granny-connect
CREATE TABLE careteam (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(50)                 -- short name
);
-- CREATE INDEX id ON careteam USING btree(id);

-- caregiver: caregiver in granny-connect
CREATE TABLE caregiver (
  id VARCHAR(20) PRIMARY KEY,
  careteam_id VARCHAR(20),
  name VARCHAR(50)                 -- short name
);
-- CREATE INDEX id ON caregiver USING btree(id);

-- caretaker : caretakers in granny-connect
CREATE TABLE caretaker (
  id VARCHAR(20) PRIMARY KEY,
  careteam_id VARCHAR(20),
  caregiver_id VARCHAR(20),
  name VARCHAR(50)                 -- short name
);
-- CREATE INDEX id ON caretaker USING btree(id);



