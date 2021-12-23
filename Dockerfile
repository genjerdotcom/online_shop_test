FROM node:12.12.0 as builder
WORKDIR /omdb_reactjs
COPY ./package.json /omdb_reactjs
RUN npm install
COPY . .
RUN npm run build
# Handle Nginx
FROM nginx
COPY --from=builder /omdb_reactjs/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf