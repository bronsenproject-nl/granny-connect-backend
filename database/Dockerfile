FROM postgres:9.6

ENV POSTGRES_DB grannyconnect

COPY add-schema.sql /docker-entrypoint-initdb.d/
COPY fake-data.sql /docker-entrypoint-initdb.d/




