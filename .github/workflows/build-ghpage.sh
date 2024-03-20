mkdir ./tmp;
cd ./tmp;

git clone https://$REPO_USERNAME:$GITHUB_TOKEN@$REPO_URL app #TODO
cd ./app;

TAG=$(date +%y.%m).$(git tag -l | wc -l)

npm i
npm run build;
git add docs;
git commit -m "${TAG}";
git push;