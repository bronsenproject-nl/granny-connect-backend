FROM postgres:9.6

COPY sql/add-schema.sql /docker-entrypoint-initdb.d/
COPY sql/fake-data.sql /docker-entrypoint-initdb.d/

