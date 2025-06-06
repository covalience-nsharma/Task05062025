FROM node:20 AS base
WORKDIR /usr/local/app

FROM base AS client-base
# For a non-root user (NODE)
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm install
# For npm    
RUN --mount=type=cache,id=npm,target=/home/node/.npm \
    npm install

FROM client-base AS client-dev
CMD ["npm", "start"]

FROM client-base AS client-build
RUN npm run build
