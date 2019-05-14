FROM nginx

ARG DOMAIN
ARG API_PORT

RUN mkdir -p /etc/nginx/sites-enabled/
WORKDIR /etc/nginx/sites-enabled/

COPY ./nginx.site ./nginx.site
RUN   sed -i "s|DOMAIN|${DOMAIN}|g" ./nginx.site
RUN   sed -i "s|API_PORT|${API_PORT}|g" ./nginx.site

