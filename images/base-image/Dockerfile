FROM balenalib/raspberrypi3-debian-node

# Install required packages for the project and for circleCi
RUN install_packages yarn
RUN install_packages git
RUN install_packages ssh
RUN install_packages tar
RUN install_packages gzip
RUN install_packages ca-certificates

# Make sure CircleCi preserves the entrypoint
LABEL com.circleci.preserve-entrypoint=true

WORKDIR /usr/app

CMD ["/bin/bash"]