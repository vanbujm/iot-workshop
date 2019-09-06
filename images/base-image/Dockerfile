FROM balenalib/raspberrypi3-debian-node

RUN sudo apt-get update
RUN apt-get install -y curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && sudo apt-get update && sudo apt-get install yarn

WORKDIR /usr/app

CMD ["/bin/bash"]