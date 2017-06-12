

create database grannyconnect;

use grannyconnect;


-- caretaker : caretakers in grannyconnect
CREATE TABLE caretaker (
  `id` varchar(20) PRIMARY KEY,
  name varchar(50),                -- short name
) ENGINE=InnoDB CHARSET=utf8;
ALTER TABLE caretaker ADD INDEX (`id`);



CREATE TABLE caregiver (
  `id` varchar(20) PRIMARY KEY,
  name varchar(50),                -- short name
) ENGINE=InnoDB CHARSET=utf8;
ALTER TABLE caregiver ADD INDEX (`id`);

