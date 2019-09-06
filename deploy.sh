deploy() {
#  docker run -v "$(pwd)":/usr/app -v "$(yarn cache dir)":/yarn-cache vanbujm/purple-iot-worshop-balena:latest bash -c "yarn --cache-folder  /yarn-cache && yarn && yarn build"
  docker run -v "$(pwd)":/usr/app -v "$(yarn cache dir)":/yarn-cache vanbujm/purple-iot-worshop-balena:latest bash -c "which yarn && which node"
  cd build || exit 1
  cp ../images/prod/* ./
  eval "$(ssh-agent -s)"
  echo -e "${BALENA_CLOUD_KEY}" >id_rsa
  chmod 0600 id_rsa
  ssh-add ./id_rsa
  ssh-keyscan git.balena-cloud.com >>balenakey
  cat balenakey >>~/.ssh/known_hosts
  git remote add balena "${BALENA_REMOTE}"
  git fetch --unshallow origin
  git commit -am "build" --allow-empty
  git push -f balena master
}

deploy
