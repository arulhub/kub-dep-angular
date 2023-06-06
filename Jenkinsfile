// node {
//     def commit_id
    
//     stage('Preparation') {
//         checkout scm
//         sh "git rev-parse --short HEAD > .git/commit-id"
//         commit_id = readFile('.git/commit-id').trim()
//     }

//     stage('docker build/push') {
//      docker.withRegistry('https://registry.hub.docker.com/v2/', 'dockerhub') {
//        def app = docker.build("arulhub4docker/kub-dep-angular:latest", '.').push()
//      }
//    }
// }

// pipeline {
//   agent any
//   def commit_id
//   stages {
//     stage("verify tooling") {
//       steps {
//         sh '''
//           docker version
//           docker info
//           docker-compose version
//           curl --version
//           jq --version
//         '''
//       }
//     }    
//   }
// }



pipeline {
  agent any

  environment {
    NAME = "kup-dep-angular"
    IMAGE_REPO = "arulhub4docker" 
    VERSION = "${env.BUILD_ID}-${env.GIT_COMMIT}"   
  }

  stages {
    stage('unit test') {
      steps{
        echo 'Here we will run unit test case'
      }
    }

    stage('build image'){
      steps{
        sh 'docker build -t ${NAME} .'
        sh 'docker tag ${NAME}:latest ${IMAGE_REPO}/${NAME}:${VERSION}'
      }
    }

    stage('push image'){
      steps{
        withDockerRegistry([credentialsId: "docker-hub", url: ""]){ //Docker Pipeline plugin
          sh 'docker push ${IMAGE_REPO}/${NAME}:${VERSION}'
        }
      }
    }

    stage('Update Manifest'){
      steps{
        dir('/manifests') {
          sh 'sed -i "s#arulhub4docker.*#${IMAGE_REPO}/${NAME}:${VERSION}#g" frontend.yaml'
          sh 'cat frontend.yaml'
        }
      }
    }

    stage('commit & push') {
      steps{
        dir('/manifests'){
          sh "git config --global user.email 'jenkins@ci.com'"
          sh "git add -A"
          sh "git commit -am 'Updated image version to ${VERSION}'"
          sh "git push origin master"
        }
      }
    }

  }
}