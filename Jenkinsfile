node {
    def commit_id
    
    stgae('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('docker build/push') {
     docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
       def app = docker.build("arulhub4docker/kub-dep-angular:${commit_id}", '.').push()
     }
   }
}