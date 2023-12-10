FROM node:8-alpine
WORKDIR /usr/app
COPY . .
RUN npm i

CMD npm run build
# note:build process occurrs on container runtime while volumns are mounted