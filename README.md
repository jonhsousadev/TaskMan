<a name="readme-top"></a>

<h1>TaskMan</h1>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was created as a study case using technologies that have a lot of sinergy between them: Angular + NestJS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Angular][Angular.io]][Angular-url]
* [https://nestjs.com/]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To execute this project, some processes needs to be done before the full execution of this.

### Setup

* Install and configure mongodb (a docker-compose.yml file that we have in the project structure can be used to do this)
* install Node.js
* Access the project folder structure and configure the backend with:
    - npm install
    - DATABASE_CONNECTION_STRING with the string used to connect mongodb
    - execute the project with the command: npm run start:dev
* Access the project folder structure and configure the frontent with:
    - npm install
    - access the environment.ts file and fill the apiUrl variable with the backend address.
    - execute the project using npm run start (ng serve)



<!-- USAGE EXAMPLES -->
## Usage

This is a very simple Tasks app based on Angular+NestJS+TailwindCSS and is a showcase on how this technologies can be used together.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jonh Sousa - jonhnbsousa@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[NestJS.io]: https://img.shields.io/badge/Nest-DD0031?style=for-the-badge&logo=angular&logoColor=white
[NestJS-url]: https://nestjs.com/
