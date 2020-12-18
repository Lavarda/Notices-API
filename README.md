<h1 align="center">
    <a>🔗 API Notices </a>
</h1>

<p align="center">API to show data for notices </p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#pré-requisitos">Requirements</a> •
  <a href="#rodando-a-api-com-docker">Runing API on local</a> •
  <a href="#rodando-a-api-sem-docker">Runing API on web</a> •  
  <a href="#rotas"> Routes </a>  •  
  <a href="#tecnologias">Technologies</a> •
  <a href="#autor">Author</a>
</p>

### Features

- [x] Creating structure to API and add to github repository
- [x] Creating DB model on EER Diagram and creating migrations
- [x] Creating Models, Controllers and Views to show data
- [x] Creating routes to show data of notices and categories 
- [x] Deploying API to an online environment (heroku)

### Requirements

To run the API on your computer, you need to dowload these tools :
[Git](https://git-scm.com), [Node.js 12.19.0](https://nodejs.org/en/)

### Runing API on local

```bash
# Cloning the repository
$ git clone https://github.com/Lavarda/vitor-lavarda-software-engineer

# or
$ git clone https://github.com/cheesecakelabs-challenges/vitor-lavarda-software-engineer

# Acess the folder of project on terminal and modify config to database on database/config/config.js

# Run code to server inicialize
$ npm run dev

# The server will start on port :3333 - acess <http://localhost:3333>
```

### Runing API on web

```bash
# Acess that link: https://news-website-cheesecake-lab.herokuapp.com and enjoy :)
```

### Routes

* **URL**

  `/notices/create`

* **Method**

  `post`

* **PARAMS**

   #### Data to create a notice
   ```json
    {
        "title": "As U.S. Modernizes Nuclear Weapons, 'Smaller' Leaves Some Uneasy",
        "website": "iMore",
        "authors": "Rene Ritchie",
        "date": "05/26/2014",
        "content": "The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of  nuclear arms.",
        "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488994454/challenge/news_06.png"
    }

* **Return**
  
  **Status Code:** 201
  
    ```json
      {
        "status": 201,
        "message": "Successfully created notice",
        "value": {
            "title": "As U.S. Modernizes Nuclear Weapons, 'Smaller' Leaves Some Uneasy",
            "website": "iMore",
            "authors": "Rene Ritchie",
            "date": "05/26/2014",
            "content": "The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of nuclear arms.",
            "tags": [],
            "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488994454/challenge/news_06.png"
        }
        }
    ``` 
-----

* **URL**

  `/notices/list`

* **Method**

  `get`
  
* **Return**
  
  **Status Code:** 200
  
    ```json
     {
        "status": 200,
        "message": "Notices searched successfully",
        "value": [
            {
            "title": "Obama Offers Hopeful Vision While Noting Nation's Fears",
            "website": "MacStories",
            "authors": "Graham Spencer",
            "date": "05/26/2014",
            "content": "In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.",
            "tags": [
                {
                "id": 1,
                "label": "Politics"
                }
            ],
            "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg"
            },
            {
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "website": "Masslive",
            "authors": "Fran Bellamy",
            "date": "05/27/2014",
            "content": "One day after Uber updated its API to add 'content experiences' for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.",
            "tags": [
                {
                "id": 11,
                "label": "Tech"
                }
            ],
            "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_02_ulyqvw.jpg"
            },
        ]
    }
    ``` 
-----

* **URL**

  `/notices/delete/:id`

* **PARAMS**

   #### notice id
  `:id`

* **Method**

  `delete`
  
* **Return**
  
  **Status Code:** 200
  
    ```json
     {
        "status": 200,
        "message": "Notice deleted successfully",
        "value": {
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "website": "Masslive",
            "authors": "Fran Bellamy",
            "date": "05/27/2014",
            "content": "One day after Uber updated its API to add 'content experiences' for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.",
            "tags": [
            {
                "id": 1,
                "label": "Politics"
            }
            ],
            "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_02_ulyqvw.jpg"
        }
    }
    ``` 
-----

* **URL**

  `/notices/find/:id`

* **PARAMS**

   #### notice id
  `:id`

* **Method**

  `post`
  
* **Return**
  
  **Status Code:** 200
  
    ```json
    {
        "status": 200,
        "message": "Notice searched successfully",
        "value": {
            "title": "Obama Offers Hopeful Vision While Noting Nation's Fears",
            "website": "MacStories",
            "authors": "Graham Spencer",
            "date": "05/26/2014",
            "content": "In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.",
            "tags": [
            {
                "id": 1,
                "label": "Politics"
            }
            ],
            "image_url": "http://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg"
        }
    }
    ``` 
-----

* **URL**

  `/categories/:id_notice/create`

* **PARAMS**

   #### id of notice you want to atrelate a category
  `:id_notice`

   ### Name of category
  ```json
    {
        "label": "Science"
    }
  ```

* **Method**

  `post`
  
* **Return**
  
  **Status Code:** 201
  
    ```json
    {
        "status": 201,
        "message": "Successfully created category",
        "value": {
            "id": 21,
            "label": "Science"
        }
    }
    ``` 
-----

* **URL**

  `/categories/list`

* **Method**

  `get`
  
* **Return**
  
  **Status Code:** 200
  
    ```json
    {
        "status": 200,
        "message": "Categories searched sucessfully",
        "value": [
            {
                "id": 1,
                "label": "Politics"
            },
            {
                "id": 11,
                "label": "Tech"
            },
            {
                "id": 21,
                "label": "Science"
            },
            {
                "id": 31,
                "label": "Sports"
            }
        ]
    }
    ``` 
-----

* **URL**

  `/categories/delete/:id`

* **PARAMS**

   #### category id
  `:id`

* **Method**

  `delete`
  
* **Return**
  
  **Status Code:** 200
  
    ```json
    {
        "status": 200,
        "message": "Categories deleted sucessfully",
        "value": {
            "id": 5,
            "label": "Math"
        }
    }
    ``` 
-----

### Technologies

The technologies used in this projects are:

- [Node.js](https://nodejs.org/en/)
- [Mysql](https://www.mysql.com/)
- [Sequelize](https://sequelize.org)
- [Express](https://expressjs.com/pt-br/)

### Author
---

<a href="github/Lavarda">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/43797265?s=400&u=e5b9bba154f27fb5572e5cf747dbb57d3ca923e6&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vitor Lavarda</b></sub>
</a> 

[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitor-lavarda-00a776177/)](https://www.linkedin.com/in/vitor-lavarda-00a776177/) 
[![Gmail Badge](https://img.shields.io/badge/-vitorlavarda.souza@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vitorlavarda.souza@gmail.com)](mailto:vitorlavarda.souza@gmail.com)