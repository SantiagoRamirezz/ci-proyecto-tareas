pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Obteniendo código del repositorio...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias del backend...'
                dir('backend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas automatizadas...'
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Simulación de compilación...'
                sh 'echo "Build completado"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulación de despliegue...'
                sh 'echo "Deploy completado"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'El pipeline falló. Revisar logs.'
        }
    }
}
