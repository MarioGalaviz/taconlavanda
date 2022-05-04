docker build -t mariogalaviz/taconlavanda-site:latest -t mariogalaviz/taconlavanda-site:$SHA -f ./site/Dockerfile ./site

docker push mariogalaviz/taconlavanda-site:latest
docker push mariogalaviz/taconlavanda-site:$SHA 

kubectl apply -f k8s
kubectl set image deployments/taconlavanda-site-deployment site=mariogalaviz/taconlavanda-site:$SHA 