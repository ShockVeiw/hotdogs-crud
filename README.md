# Test task for WAF-Agency

### Demo: https://fast-headland-06926.herokuapp.com
---
## How to run local:
- Clone this repository with the following command:
> git clone https://github.com/ShockVeiw/hotdogs-crud.git 
- Change directory to "client" and enter the following command:
> npm run build
- Change directory back to the root and enter the following command:
> docker-compose up
- When the docker containers are already running  enter the following command to make migrations for db:
> npx typeorm migration:run
- Now the app is running on http://localhost:8080 and should work fine