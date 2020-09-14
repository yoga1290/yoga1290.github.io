FROM node:8-alpine as builder
WORKDIR /usr/app
COPY . .
RUN npm i
RUN npm run build
####################################
# TODO: use nginx.conf for HTTPS
####################################
FROM nginx
COPY --from=builder /usr/app/docs /usr/share/nginx/html
HEALTHCHECK --interval=2s \
            --timeout=2s \
            --start-period=2s \
            --retries=3 CMD [ "curl http://localhost" ]