FROM balenalib/raspberrypi3-debian-node

COPY package.json ./package.json
COPY . ./
RUN yarn config set cache-folder /yarn-cache
RUN yarn
RUN yarn build

RUN rm -rdf node_modules
RUN yarn cache clean
RUN find . -maxdepth 1 ! -iname build -exec rm -rdf {} \;
RUN mv build/ ./
RUN rm -d build

WORKDIR /usr/app

#CMD ["/bin/bash"]
CMD ["node", "./index.js"]