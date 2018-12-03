## Movie Catalog

### Scenario

We have a huge movie collection but is too extensive for any human to scan through manually.

This single page app is to search and filter through the movie catalog with the following features, using React and Redux. We are using some fake data in the JSON file but for project demostration purpose it's all good.

#### Features

1. **SEARCH:** The catalog should allow you to search movies by name.
1. **FILTER:** The catalog should allow you to filter by genre

The app will de-dupe genre in the sample json file.

### Getting Started

In order to request for the movie data, you will need to run the node server. By default, the command to do this is:

```
$ cd server
$ npm start
```

Once the server is up, you may make a GET request for the data by hitting `http://localhost:3001/api/movies`.

You can expect the data to be in the following JSON format:

```
[
    ...
    {
        "title": "The Lion King",
        "year": 1994,
        "director": "Rob Minkoff",
        "cast": "(voices) Jonathan Taylor Thomas, Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg, Moira Kelly, Nathan Lane",
        "genre": "Animated",
        "notes": "2 Academy Awards; Golden Globe Best Picture Musical or Comedy"
    },
    ...
]
```

Then run the client side app:

```
$ cd client
$ npm start
```
