FROM balenalib/raspberrypi3-debian-node

WORKDIR /usr/app
COPY package.json ./package.json
COPY . ./
RUN yarn config set cache-folder /yarn-cache
RUN yarn
RUN yarn build

RUN yarn cache clean
RUN find . -maxdepth 1 ! -name 'build' ! -name '.' -type d -exec rm -rdf {} +
RUN find . -maxdepth 1 -type f -exec rm -rdf {} +
RUN mv build/* ./
RUN rm -d build
RUN ls -a


#CMD ["/bin/bash"]
CMD ["node", "./index.js"]