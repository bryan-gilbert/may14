FROM nginx

ARG DOMAIN
ARG API_PORT

RUN mkdir -p /usr/share/nginx/error-pages/

WORKDIR /usr/share/nginx/error-pages/
COPY ./custom*.html ./

WORKDIR /etc/nginx/
COPY ./nginx.conf ./nginx.conf
RUN   sed -i "s|DOMAIN|${DOMAIN}|g" ./nginx.conf
RUN   sed -i "s|API_PORT|${API_PORT}|g" ./nginx.conf

WORKDIR conf.d/
RUN rm default.conf

COPY ./default.conf ./default.conf
RUN   sed -i "s|DOMAIN|${DOMAIN}|g" ./default.conf
RUN   sed -i "s|API_PORT|${API_PORT}|g" ./default.conf

