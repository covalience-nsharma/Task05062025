# ARG NODE_VERSION = 20
FROM node:20 AS base

WORKDIR /app

#FROM base AS client-base    
COPY package.json ./
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm install
COPY . /app
RUN npm run build

FROM nginx:latest AS runtime

COPY --from=base /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
