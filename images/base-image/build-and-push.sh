if [ -z "$1" ]; then
  echo "Please specify a version number"
  exit 1
else
  version="$1"
  base_tag=vanbujm/purple-iot-worshop-balena:

  version_tag="${base_tag}${version}"
  latest_tag="${base_tag}latest"

  docker build -t ${version_tag} -t ${latest_tag} .
  docker push ${version_tag}
  docker push ${latest_tag}
fi
