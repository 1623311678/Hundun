pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build-storybook'
      }
    }

  }
}