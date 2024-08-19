pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        
        stage('Stop and Remove Containers') {
            steps {
                script {
                    def containersToExclude = ['nginx_container', 'nextjs_app_container']
                    containersToExclude.each { container ->
                        sh "docker stop $container || true"
                        sh "docker rm $container || true"
                    }
                }
            }
        }

        stage('Remove Specific Docker Images') {
            steps {
                script {
                    def imagesToRemove = ['nginx:alpine', 'mohamedryad/nextjs-app:v1']
                    imagesToRemove.each { image ->
                        sh "docker rmi $image || true"
                    }
                }
            }
        }

        stage('Docker Compose Build and Start') {
            steps {
                script {
                    dir('/var/jenkins_home/workspace/frontend-superabbit-autiomation/') {
                        sh 'docker-compose up --build -d --no-recreate --no-deps nginx nextjs-app'
                    }
                }
            }
        }


        stage('Push Docker Images with Docker-Compose') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                        
                        dir('/var/jenkins_home/workspace/frontend-superabbit-autiomation/') {
                            sh 'docker-compose push'
                        }
                    }
                }
            }
        }
    }
}

