FROM balenalib/raspberrypi3-debian-node
RUN install_packages yarn
WORKDIR /usr/app
COPY package.json package.json
RUN yarn
COPY . ./
RUN yarn build
CMD ["node", "build/index.js"]