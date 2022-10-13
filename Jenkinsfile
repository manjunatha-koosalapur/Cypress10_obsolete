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
   sh "npm install"
}
}   
 stage('Run tests') {
  steps{
   sh "npm run e2e:cy:dashboard:tag"
}
}
}
}
