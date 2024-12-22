Calculator Application with CI/CD Pipeline
Overview
The Calculator Application is a Node.js-based project designed to perform basic arithmetic operations, including addition, subtraction, multiplication, and division. The project integrates an Azure DevOps CI/CD pipeline to automate testing, code quality checks, and deployments to Test and Production environments. Additional stages for security testing, performance testing, and user acceptance testing (UAT) are included to ensure robustness.
Technologies used
•	Technologies Used
•	Node.js: Application runtime.
•	Jest: Unit testing framework.
•	ESLint: Static code analysis tool.
•	Azure DevOps: CI/CD pipeline management.
•	Selenium: User Acceptance Testing framework.
•	Benchmark.js: Performance testing library.
Local Development Setup
git clone https://github.com/WilliamAkingba/Calculator.git
cd Calculator
npm install
npm test
npx eslint .
npm install selenium-webdriver chromedriver --save-dev 2.
node selenium-tests.js
Application Features
•	Arithmetic Operations: Supports addition, subtraction, multiplication, and division.
•	Error Handling: Ensures all inputs are numbers and throws errors for invalid inputs or division by zero.
•	Unit Testing: Validates functionality and error handling using Jest.
•	Static Code Analysis: Enforces coding standards and identifies potential issues using ESLint.
•	CI/CD Pipeline: Automates builds, testing, and deployments with manual approval gates.
•	Security Analysis: Uses eslint-plugin-security to detect potential security vulnerabilities in JavaScript code.
•	Performance Testing: Benchmarks key arithmetic operations using Benchmark.js.
•	User Acceptance Testing (UAT): Validates application behavior using Selenium.
CI Pipeline Implementation
The CI/CD pipeline is implemented using Azure DevOps and includes the following stages:
1.	Build Stage:
•	Installs dependencies (npm install)
•	Runs ESLint for static code analysis
•	Executes Jest unit tests.
2.	Deploy to Test: 
•	Automatically deploys changes pushed to the development branch to the Test environment.
3.	Deploy to Production
•	Deploys changes pushed to the main branch to the Production environment after manual approval.
4.	Performance Testing:
•	Benchmarks core arithmetic operations using Benchmark.js.
5.	Security Testing:
•	Executes npm audit to identify vulnerabilities. 
6.	UAT Testing:
•	Runs automated Selenium scripts to validate application behavior.
Branch Policies and Protection
1.	development Branch:
•	Used for active development and testing.
•	Automatically triggers deployment to the Test environment via the pipeline.
2.	main Branch:
•	Used for production-ready code.
•	Requires manual approval before deployment to the Production environment.
3.	Branch Protection:
•	Enable pull request policies in Azure DevOps to enforce code reviews and restrict direct pushes.
Testing Strategy
1.	Unit Testing:
•	Validates functionality of arithmetic operations and error handling using Jest.
2.	Static Code Analysis:
•	Enforces coding standards and identifies potential issues using ESLint.
3.	Optional Tests:
•	Performance testing using using Benchmark.js.
•	Security testing to identify vulnerabilities using npm audit.
•	UAT Automated testing of application behavior using Selenium scripts
Troubleshooting
1.	Pipeline Fails in Build Stage
•	Ensure package.json and dependencies are correctly configured.
•	Fix any ESLint errors or warnings.
2.	Deployment to Test or Production Fails: 
•	Check the environment configuration in Azure DevOps. 
•	Verify permissions for the pipeline to access environments.
3.	Manual Approval Issue:
•	Ensure approvers are correctly assigned to the Production environment in Azure DevOps.
4.	Selenium Errors:
•	Ensure chromedriver is installed and updated.
•	Confirm the test HTML file exists at the specified path. 
5.	Benchmark.js Errors:
•	Verify that Benchmark.js is correctly installed as a dependency.
•	Ensure arithmetic functions in calculator.js work as expected.
Environment Setup and Configuration
1.	Create two environments:
•	Test Environment: Deploys changes from the development branch.
•	Production Environment: Deploys changes from the main branch.
2.	Assign appropriate pipeline permissions for accessing these environments in Azure DevOps.
Deployment Process
1.	Push changes to development:
•	Triggers the pipeline and runs build, security, performance, and UAT tests before deploying to the Test environment.
2.	Merge development into main:
•	Push changes to the main branch to deploy to Production after successful pipeline execution and manual approval.
Security and Performance Testing
•	Performed using npm audit to identify vulnerabilities in project dependencies.
•	Uses Benchmark.js to measure the performance of key arithmetic operations.
UAT Testing with Selenium
•	Selenium scripts validate addition and subtraction functionality on a test HTML page.
•	Integrated into the Azure DevOps pipeline as an automated stage after Test environment deployment.
Pipeline Approval Gates
•	Approval gates are configured for the Production environment to ensure deployments require manual review before proceeding.
•	Approvers can verify logs, test results, and code changes prior to approval.
