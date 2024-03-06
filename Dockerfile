# PEGAR O NODE
FROM node:lts as build

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/local/app && cp -a /tmp/node_modules /usr/local/app/

WORKDIR /usr/local/app

# ADICIONAR O CODIGO FONTE PRO APP
COPY ./ /usr/local/app/

# GERAR A BUILD DA APLICAÇÃO
RUN npm run build

# COLOCAR O APP NO NGINX SERVER
FROM nginx:latest

# COPIAR E COLOCAR O APP NO NGINX
COPY --from=build /usr/local/app/dist/build/browser /usr/share/nginx/html


# RODAR OS ENTRYPOINTS
COPY ./entrypoint.sh /usr/local/app/entrypoint.sh

COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

# EXPOR AS PORTAS
EXPOSE 80 443 6006 4200

RUN chmod +x /usr/local/app/entrypoint.sh
ENTRYPOINT [ "/usr/local/app/entrypoint.sh" ]
