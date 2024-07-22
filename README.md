<div align="center">
<img src="https://i.imgur.com/Lmtb4Wx.png">
  <h1>yngdev.com</h1>
  <p></p>
  <img src="https://img.shields.io/badge/stability-dev-orange.svg" alt="Experimental">
  <img src="https://img.shields.io/github/license/atlamors/portfolio-theme" alt="Liscence">
  <br><br>
</div>

## Local Setup

- Clone the repo
- Use `npm install` to install dependencies
- Use `npm run dev` to run local instance on **http://localhost:3000**

## Requirements for Data Fetching

- Data is stored in NoSQL MongoDB
- Data is fetched using API (running with Express) in Node.js environment, you will need to clone another repo and deploy it
  - Link to the repo
- UUID token to get responses from API, make sure you set same token for respectable environments

## Deployment

- Deployment is done using Docker and Next.js
- Dockerfile serves as a source of truth for creating the image
  - Within Dockerfile we are passing all the secrets and variables for our image to use either during creation or during runtime

## Deployment Requirements

- Private docker registry or dockerhub account
- This specific repo uses private docker registry, setup using secrets within the repository itself

## Github Actions

### deploy-to-test.yml

- Will push image to private Docker Registry using Docker Build & Push action
- Image will have test tag appended, but it can easily be changed in `deploy-to-test.yml`
- Deployment environment checks regularly if new version of image is available and deploys the newest image

### deploy-to-prod.yml

- Will push image to private Docker Registry using Docker Build & Push action
- Image has production image tag, but it can easily be changed in `deploy-to-test.yml`
- Deployment environment checks regularly if new version of image is available and deploys the newest image

## PR & Merging

- When making changes create own branch
- In PR Use Action `Deploy to Test` which will deploy the changes from that branch to **https://yngdev-dev-test.neo-net.net/** for testing and verification purposes

## Deployment

- Deployment to the live environment **https://yngdev.com** is done automatically upon merge to `master` using Github Action
- To avoid production damage, please use the test environment prior to deploying

## Built With

![Static Badge](https://img.shields.io/badge/MongoDB-%2302EC64?style=plastic&logo=mongodb&labelColor=black)
![Static Badge](https://img.shields.io/badge/Express-%23000000?style=plastic&logo=express&labelColor=black)
![Static Badge](https://img.shields.io/badge/React-%2361DAFB?style=plastic&logo=react&labelColor=black)
![Static Badge](https://img.shields.io/badge/Nodejs-%23339933?style=plastic&logo=nodedotjs&labelColor=black)
![Static Badge](https://img.shields.io/badge/-Docker-46a2f1?style=plastic&logo=docker&logoColor=white)
