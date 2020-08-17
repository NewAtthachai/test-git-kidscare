FROM node:12.14.0 as builder

ARG API_URL 
ARG NODE_ENV 
ARG API_URL_BROWSER

WORKDIR /src

COPY . .

RUN npm install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN npm rebuild node-sass
RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:12.14.0-alpine

ARG API_URL 
ARG NODE_ENV 
ARG API_URL_BROWSER

WORKDIR /src

RUN npm install --save nuxt && npm install --save vue-server-renderer

COPY --from=builder /src  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]
