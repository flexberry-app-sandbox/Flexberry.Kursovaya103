docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya_10-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya_10-java/app ../../..
