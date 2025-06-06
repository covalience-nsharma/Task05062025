# ARG NODE_VERSION = 20
FROM node:20 AS base

WORKDIR /usr/local/app

FROM base AS client-base    
COPY package.json ./
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm install
# COPY ..

FROM client-base AS client-dev
CMD ["npm", "start"]

FROM client-base AS client-build
CMD ["npm", "run","build"]
CMD ["serve", "-s","build"]
