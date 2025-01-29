#!/bin/bash

branch_date=$(date +"%y-%m-%d")

DESCRIPTION_REGEX="^[a-zA-Z0-9-]+$"

while [[ ! $description =~ $DESCRIPTION_REGEX ]];
do
  if [ ! -z "$description" ]
  then
      printf "\tОШИБКА! Описание не соотвествует маске"
  fi

  printf 'Введите описание задачи: '
  read  -r description
  printf "\n"


  if [ -z "$description" ]
  then
    description='!'
  fi
done

echo 'Обновление данных'
git fetch --all
echo 'Переключение на develop'
git checkout main
echo 'Обновление кода'
git pull --ff-only origin
echo 'Обновление тегов'
git pull --tags
echo 'Создание ветки с названием'
git checkout -b feature/$branch_date-$description
