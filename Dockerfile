FROM ubuntu:latest
LABEL authors="triddov"

ENTRYPOINT ["top", "-b"]