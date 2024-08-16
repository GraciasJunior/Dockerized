# Dockerized

## BUILD FRAMEWORK IMAGE

- First of all move to dockerfiles located in DOCKERIZED folder

```
cd dockerfiles
```

- lunch build command

```
./dBuild imagename source
```

exemple
```
cd dockerfiles
./dBuild laravel ./laravel
```


## RUN FRAMEWORK CONTAINER
After image building, you'lld need to run image to create container

-  lunch dRun command
  exemple
```
cd dockerfiles
./dRun port imageName

```