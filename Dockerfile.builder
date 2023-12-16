FROM node:21-alpine
WORKDIR /usr/app
COPY . .

# keep dependencies cached; so runtime 'npm i' won't need to
RUN npm i

CMD npm i && npm run build
# note:build process occurrs on container runtime while volumns are mounted