# FIT

FIT is a web-enabled, mobile-friendly, Django and React-powered workout log app.

## Features

- Create your fitness profile to log your workouts and track your progress
- Start your current workout by using integrated workout tracker
- Add your favorite exercises, sets along with descriptions to your current workout
- Track time spent on workout, exercises, number of sets, amount of weight lifted, repetitions, etc.
- Personalize your workout by providing descriptions to workout & exercises
- Track all your workouts, consult them by visiting history page
- Consult every piece of information related to your all past workouts using tree-like structure

Application lets to create workout session, name it, add note and compose this workout sessions of exercises, which are in turn composed of sets. Sets represent how much time the exercise has been repeated, the amount of weight lifted and how much time each repsective set is repeated if it's a physical activity, if it's a cardio activity it represents how much time the exercise is repeated, the <em>km</em>(s) (or miles) traveled and the time spent on this set. Each exercise is personalized by naming it, adding a description to describe it and providing sets.

By default users create register on the website to create their profile, which lets in turn to track their workout history. This enables possibility of consulting all past workouts with all the information provided for this workout session.

> :movie_camera: **Product demo video** can be found [here](https://youtu.be/3dJdSfd3ZQU)

## Tech

FIT uses a number of open source projects to work properly:

- [React] - HTML enhanced for web apps
- [Tailwind CSS] - awesome library for creating visually appealing components
- [Heroicons] - collections of beautiful icons for web apps
- [Django] - backend frameworks that enables model–template–views architechtural pattern
- [Django REST Framework] - backend framework for building web APIs. Independent from frontend
- [PostgreSQL] - storage of workout sessions
- [Json Web Tokens] - security & user authentication
- [Docker] - containerized Application Development

## Documentation

FIT is made using React, by creating components.<br>
Description and functionalities of each of them are linked below.

| Component              | Description                                                                                                                                                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App                    | Main component, point of entry to the application. Defines applicaiton routes (both authorized & non-authorized): Login, Resiter, Workout & History pages.<br>If non-authenticated user tries to visit a restricted page, they will be redirected to login page instead. Implemented using React router. |
| PrivateRoute           | Used to represent private routes (authentication required). Verifies if user is authenticated, if it's the case allows access, if not redirects to login page.                                                 																							|
| useAxios               | Represents Axios instance. Adds interceptor's to axios call, that verify if token is valid, if not refreshes it. Axios passes bearer token with each HTTP request. 																																		|
| SelfAdjustingInterval  | Utility class, used by tracker's timer to update tracker's seconds spent on current workout session.  																																																	|
| AuthenticationProvider | Service class, contains functions to login, log out or register user. 																																																									|
| Register               | Defines layout of registration page. 																																																																	|
| Login                  | Defines layout of login page. 																																																																			|
| Landing                | Defines layout of landing page, contains helper functions to scroll to bottom of page and hides button this button if bottom of page is already reached. 																																				|
| Tracker                | Defines layout of workout tracker. Lets start current workout session. Contains various helper functions, such as:<br>Increment of timer's seconds & update of it's state, addition or removal of exercises, addition or removal of workout note.														|
| Workout                | Defines layout of workout page. Let's to activate current workout sessions, enable tracker and to cancel it or finish it.<br>Contains helper functions to POST workout sessions related data and to format workout sesion related data. 																	|
| Exercise               | Defines layout of exercise entry in workout tracker. Contains helper functions, used to render stored exercise details on tracker state changes: removal, update, etc.<br> Also contains helper functions to add or remove sets. 																		|
| Set                    | Defines layout of set entry in workout tracker. Contains helper functions, used to render stored set details on tracker state changes. 																																									|
| History                | Defines layout of history page. Contains helper functions to fetch all existing workouts for current user and functions to enable pagination with page switching. 																																		|
| Entry                  | Defines layout of history entry in history page. Contains various helper functions, used to reveal workout's exercises, exercise's sets and functions to format workout length and date. 																												|
| Navbar                 | Defines layout of navbar. Displays either desktop version or tablet version depending on screen size.<br> Contains links to all pages of the application. 																																				|
| NavigationLink         | Defines layout of navbar's links. Used within navbar component to represent links. 																																																						|

<br>
FIT is also made using Django REST framework. 5 models have been created, each of them represents one entity.<br>
Description and functionalities of each of them are linked below.

| Model    | Description                                                                                                                                                                                                                                                                                              							  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User     | Represents user. Contains fields related to user informations, such as: username, email, first name, last name, phone number & registration date, which is generated automatically.                     																															  |
| History  | Represents workout history of user. Contains only one field history, which makes reference to existing User.                                                						 																																				  |
| Workout  | Represents workout session. Contains fields, such as: name, date, length, note, history which references existing User History and author which references registered User.   		 																																				  |
| Exercise | Represents exercise. Contains fields, such as: name, instructions and workout, which references Workout session.                                                               		 																																			  |
| Set      | Represents set. Contains fields, such as: exercise which references Exercise, kilograms, pounds (for US-based users), repetitions for physical activies, as well as: kilometers, miles (for US-based users), time for cardio activities. Also contains fields: isFinished, isFailed to indicate if set has been failed or completed. |

## Installation

> :warning: **NOTE:** The whole application can be started up using `docker compose up` and running **backend** with the following command: `python manage.py runserver` if you already have docker-compose file

FIT requires [Python](https://www.python.org) v3+ to run. 

Install the dependencies and devDependencies and start the server.

Frontend:
```sh
cd FIT/frontend
npm install
npm run start
```

Backend:
```sh
cd FIT/backend/src
pip3 install -r requirements.txt
python manage.py runserver
```

## Docker

FIT is very easy to install and deploy in a Docker container.

1. [Install docker compose](https://docs.docker.com/compose/install/)
2. Specify the configuration of 3 services (images) in `docker-compose.yml` file
2. Run `docker-compose up`
4. Verify the deployment by navigating to your server address in
your preferred browser.

Frontend:
```sh
127.0.0.1:3000
```

Backend:
```sh
127.0.0.1:8000
```

Database:
```sh
127.0.0.1:6543
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [React]: <https://react.dev>
   [Tailwind CSS]: <https://tailwindcss.com>
   [Heroicons]: <https://heroicons.com>
   [Django]: <https://www.djangoproject.com>
   [Django REST Framework]: <https://www.django-rest-framework.org>
   [PostgreSQL]: <https://www.postgresql.org>
   [JSON Web Tokens]: <https://jwt.io>
   [Docker]: <https://www.docker.com>
