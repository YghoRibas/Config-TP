pipeline {
    agent any
    
    stages {
        stage('Hello') {
            steps {
                echo 'Hello, world!'
            }
        }
        stage('Print branch') {
            when {
                branch "dev-*"
            }
            steps {
                echo "Branch: ${env.BRANCH_NAME}"
            }
        }
    }
}
