deploy() {
  eval "$(ssh-agent -s)"
  echo -e "${BALENA_CLOUD_KEY}" >id_rsa
  chmod 0600 id_rsa
  ssh-add ./id_rsa
  ssh-keyscan git.balena-cloud.com >>balenakey
  cat balenakey >>~/.ssh/known_hosts
  git remote add balena "${BALENA_REMOTE}"
  git fetch balena
  ls -a
  cp ./images/prod/Dockerfile ./
  git status
  git add -f Dockerfile
  git commit -m "Travis build: ${TRAVIS_BUILD_ID}" --allow-empty
  git status
  echo "Pushing to balena 😎"
  git push -f balena master
}

deploy
