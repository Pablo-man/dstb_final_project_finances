# README

## Overview
This repository contains multiple projects and studies related to various fields including cybersecurity, optimization, data science, software development, and cloud computing. It includes implementations in different programming languages, Docker configurations, AWS setups, and research on multiple technical topics.

## Projects

### 1. **Cybersecurity Workshops**
Organizing a series of courses/workshops covering topics such as:
- Password security
- Data breaches

### 2. **Mathematical Optimization**
Studying and implementing solutions for:
- **Knapsack Problem**: Optimization based on weight, volume, and value.
- **Scheduling Problem**: Finding optimal scheduling strategies.
- **Linear Programming & Integer Programming**: Network models like shortest path and production/storage cost optimization.
- **Non-linear Programming**: Cost optimization scenarios.

### 3. **Data Science & Machine Learning**
Working on predictive modeling for:
- **Sales Prediction**: Using non-parametric models.
- **Credit Card Debt Prediction**: Based on customer descriptive variables.
- **Crime Rate Prediction**: Using **USCrimes** dataset (1994 observations, 103 variables).
- **Baseball Player Salary Prediction**: Dataset of 322 players with 20 performance statistics.
- **Bank Customer Churn Prediction**: **DatosChurn** dataset (10,000 rows, 13 columns, imbalanced problem).

### 4. **Software Development**
- **Habit Tracking App**: Developed using **Scrum methodology**.
- **Pokémon Search App**: Implementation of Pokémon data retrieval.
- **Cash Register App**: A simple point-of-sale system.
- **Restaurant Reservation Management System**: Defining system scope.
- **Dice Game**: Detects combinations like Full House and manages scores.

### 5. **Cloud & Containerization**
- **Docker Configuration**: Working with Dockerfiles, requirement files, and running **Hello World** applications in Python, PHP, and Ruby.
- **AWS Configuration**: Always using **t2.micro** instances.

### 6. **Project Management**
- **Jira Setup**: Managing projects, user stories, backlogs, and sprint configurations.

## Repository Structure
```
/
├── src/                # Source code for various projects
├── Dockerfile          # Docker setup
├── package.json        # Node.js dependencies
├── config.js           # Configuration settings (environment variables)
├── app.js              # Express server setup
└── README.md           # This documentation
```

## Setup & Installation
To run the Node.js-based applications:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm start
   ```

## Docker Usage
To build and run the Docker container:
```sh
docker build -t your-app .
docker run -p 5000:5000 your-app
```

## Contact
For any questions or contributions, feel free to open an issue or submit a pull request.