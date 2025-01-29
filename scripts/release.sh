#!bin/sh

git fetch --all
git checkout main
git pull --ff-only origin
git pull --tags
VERSION=$(npm pkg get version --workspaces=false | tr -d \")
git checkout -b feature/NEXT/v_${VERSION}
git push --set-upstream origin feature/NEXT/v_${VERSION}
