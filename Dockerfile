FROM node:18.13.0 as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx
COPY --from=build /app/dist/kub-dep-angular /usr/share/nginx/html
EXPOSE 80

