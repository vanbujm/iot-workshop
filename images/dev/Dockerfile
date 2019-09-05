FROM vanbujm/purple-iot-worshop-balena:latest
WORKDIR /usr/app
COPY package.json package.json
RUN yarn
COPY . ./
RUN yarn build
CMD ["node", "build/index.js"]