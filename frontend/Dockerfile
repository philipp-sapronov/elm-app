# node alpine3.11
FROM node:14.5.0-alpine3.11 as app

ARG env
ARG port

ENV BUILD_DIR=dist
ENV BUILD_MODE=$env
ENV PORT=$port

WORKDIR /usr/app

RUN wget -O - 'https://github.com/elm/compiler/releases/download/0.19.1/binary-for-linux-64-bit.gz' \
  | gunzip -c >/usr/local/bin/elm
RUN chmod +x /usr/local/bin/elm

COPY . .

RUN npm install
RUN if [ "$env" = "production" ] ; then npm run build ; fi

# nginx alpine3.11
FROM nginx:1.19.1-alpine

COPY --from=app /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf