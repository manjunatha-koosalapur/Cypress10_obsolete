pipeline{
 agent{
  docker{
   image 'cypress/base:16.13.0'
    args '-u root:root'
}
}

stages{
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/qaboxletstest/cypress-jenkins-demo.git'
		    }
		}
 stage('Dwonload the dependencies'){
  steps{
   bat "npm install"
}
}   
 stage('Run tests') {
  steps{
   bat "npm run e2e:cy:dashboard:tag"
}
}
}
}
