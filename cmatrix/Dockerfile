FROM  alpine:latest

RUN apk add --no-cache cmatrix

ENTRYPOINT ["cmatrix"]

CMD ["-abs", "-C", "red"]


# docker build -t cmatrix .
# docker container run -it cmatrix:latest 