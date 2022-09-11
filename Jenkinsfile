pipeline{
    agent any
    parameter{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "enter the script path")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "enter the bowser")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Builinging'){
            steps{
                echo "Building the application"
            }
            
        }

        stage('Testing'){
            steps{
                bat "nmp i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
            
        }

        }
    }
