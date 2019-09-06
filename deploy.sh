deploy() {
  cp images/base-image/Dockerfile ./
  eval "$(ssh-agent -s)"
  echo -e "${BALENA_CLOUD_KEY}" >id_rsa
  chmod 0600 id_rsa
  ssh-add ./id_rsa
  ssh-keyscan git.balena-cloud.com >>balenakey
  cat balenakey >>~/.ssh/known_hosts
  git remote add balena "${BALENA_REMOTE}"
  git push -f balena master
}

deploy
