FROM ubuntu:latest

RUN apt-get update && apt-get install -y apache2-utils && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["ab", "-n", "10", "-c", "2"]

CMD ["--help"]

# docker build -t apachebench .
# docker container run apachebench:latest https://singhops.net/