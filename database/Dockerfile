FROM postgres:9.6

COPY add-schema.sql /docker-entrypoint-initdb.d/
COPY fake-data.sql /docker-entrypoint-initdb.d/

