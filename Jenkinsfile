pipeline {
    agent any
    stages {
          stage('Get source code') {
            steps {
                git credentialsId: '1', url: 'https://github.com/HOAN-NGUYEN-98/playwright.git'
                echo 'Source code retrieved'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat script: 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat script: 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat script: 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit '**/test-results/*.json'
        }
    }
}
