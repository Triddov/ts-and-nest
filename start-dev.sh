# переменные для бд не мапатся без флага --env-file
docker-compose --env-file .dev.docker.env -d up --build
