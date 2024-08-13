port=$1
image=$2

sudo docker run -p $port:$port $image