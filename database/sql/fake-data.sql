\connect grannyconnect;

INSERT INTO careteam (id, name) VALUES ('1000', 'Haakma');
INSERT INTO caregiver (id, careteam_id, name) VALUES ('2000', '1000', 'Sido');
INSERT INTO caretaker (id, careteam_id, caregiver_id, name) VALUES ('3000', '1000', '2000', 'Nellie');

