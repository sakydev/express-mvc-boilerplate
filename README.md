# ExpressJS MVC Boilerplate

Welcome to the ExpressJS MVC boilerplate with Prisma! This project provides a solid foundation for building modern web applications using ExpressJS, following the MVC (Model-View-Controller) pattern and integrating with Prisma for database management. Inspired by the organizational structure of Laravel, this boilerplate aims to streamline development by providing a clear and scalable architecture.

### Features
- **MVC Architecture**: Organize your code into models, views, and controllers for improved maintainability and separation of concerns.
- **Prisma Integration**: Utilize Prisma as the ORM (Object-Relational Mapping) tool for seamless database interactions, ensuring efficient CRUD operations.
- **Service Layer**: Implement a service layer to encapsulate business logic and interact with repositories, promoting modularity and code reuse.
- **Posts CRUD Operations**: Out-of-the-box support for creating, reading, updating, and deleting posts, serving as a practical example for extending functionality.
- **ExpressJS**: Leverage the flexibility and performance of ExpressJS, a fast and minimalist web framework for Node.js, to handle HTTP requests and build robust APIs.

### Getting started
1. **Clone**: Begin by cloning this repository to your local machine.  
`git clone https://github.com/sakydev/express-mvc-boilerplate.git`

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies using npm or yarn.
```
cd express-prisma-boilerplate
npm install
```

3. **Migration**: Run database migrations to initialize your database schema.  
`npx prisma migrate dev`

5. **Start**: Launch the ExpressJS server and start developing your application!  
`npm start`
