FROM balenalib/raspberrypi3-debian-node

WORKDIR /usr/app
# Copy package first because it will help with caching
COPY package.json ./package.json
COPY ../base-image ./

RUN yarn
RUN yarn build

# Clean up files because we want to use build as our new working dir but we also dont want to setup a new git
RUN yarn cache clean
RUN find . -maxdepth 1 ! -name 'build' ! -name '.' -type d -exec rm -rdf {} +
RUN find . -maxdepth 1 -type f -exec rm -rdf {} +
RUN mv build/* ./
RUN rm -d build

CMD ["node", "./index.js"]