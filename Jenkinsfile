pipeline {
    agent { docker { image 'node:19-alpine3.16' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}