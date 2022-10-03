pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''pwd
npm install'''
        sh 'npm run build-storybook'
      }
    }

  }
}