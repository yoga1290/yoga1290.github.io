ls;
cd /usr
git clone https://$REPO_USERNAME:$GITHUB_TOKEN@$REPO_URL app #TODO
cd /usr/app;
ls;

npm i
# RUN npm i -g http-server
# RUN npm run test
npm run build;
git add docs;
git commit -m "ghpage" && git push;
