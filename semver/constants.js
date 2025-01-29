module.exports = {
    BREAKING_CHANGE: 'BREAKING CHANGE',
    REPO_URL: 'https://github.com/nevybrown/zalup',
    SCOPES: {
        proj: 'Проект',
        example: 'Примеры'
    },
    TYPES: {
        fix: {
            description: 'Внесение доработок или исправление дефектов (x.x.X)',
            name: 'Доработка',
            value: 'fix'
        },
        feat: {
            description: 'Внесение новой функциональности (x.X.x)',
            name: 'Функциональность',
            value: 'feat'
        },
        ref: {
            description: 'Улучшения качества кода (без внесения функциональности)',
            name: 'Рефакторинг',
            value: 'ref'
        },
        perf: {
            description: 'Внесение оптимизации производительности функциональности',
            name: 'Оптимизация',
            value: 'perf'
        },
        style: {
            description: 'Улучшения читаемости и структуры кода (без внесения функциональности)',
            name: 'Код-стайл',
            value: 'style'
        },
        chore: {
            description: 'Обслуживание проекта и процесса разработки',
            name: 'Обслуживание',
            value: 'chore'
        },
        docs: {
            description: 'Описание документации или комментария в коде',
            name: 'Документация',
            value: 'docs'
        },
        test: {
            description: 'Описание тестов функциональности',
            name: 'Тестирование',
            value: 'test'
        },
        ci: {
            description: 'Исполнение процессов интеграции',
            name: 'Интеграция',
            value: 'ci'
        }
    },
    USER_MAIL: '@mail.ru'
}
