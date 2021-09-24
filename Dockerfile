FROM node:16.8.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn install --check-files
RUN yarn build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html/webapp-group11
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
