pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Obteniendo código del repositorio...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo contenedor...'
                sh 'echo "Simulación de build"'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas básicas...'
                sh 'echo "Simulación de pruebas: OK"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Levantando contenedores...'
                sh 'echo "Simulación de despliegue"'
            }
        }
    }
}
