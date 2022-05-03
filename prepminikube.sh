docker build -t mariogalaviz/taconlavanda-site-test -f ./site/Dockerfile.dev ./site
docker build -t mariogalaviz/taconlavanda-site-casi-prod -f ./site/Dockerfile ./site

docker push mariogalaviz/taconlavanda-site-test
docker push mariogalaviz/taconlavanda-site-casi-prod