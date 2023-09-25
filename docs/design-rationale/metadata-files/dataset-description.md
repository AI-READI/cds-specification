---
lang: en-US
title: SODA Server
description: The SODA for SPARC server architecture, development, and testing guide
---

# Overview

This page outlines the SODA server architecure. It also describes development principles to follow when adding features to/refactoring the server code. To aid in understanding key concepts links to the flask_restx documentation are included.

## Architecture and Patterns

At a high level the server is a RESTish monolith that utilizes Flask and Flask Restx. It primarily communicates with the SODA for SPARC client and leverages the Pennsieve Agent for file uploads to the Pennsieve service.

TODO: Insert image/graph here of the server, the client, and the Agent it communicates with.

The server utilizes a [namespaces](https://flask-restx.readthedocs.io/en/latest/scaling.html) pattern to organize endpoints. Each namespace's endpoints are defined in the `apis` package with the name api<namespace_name>. The implementation code for each endpoint is in a corresponding python package at the root of the project structure that uses the <namespace_name> as the name. For example, the manage_datasets namespace has an apiManageDatasets.py file in the apis package and a manageDatasets.py file in a manageDatasets package.

The Swagger documentation for the server is generated in each namespace file. This documentation tells the client how to communicate with the server's many endpoints. It outlines what the return values will be and what the expected input parameters are. To better understand Swagger documentation in Flask RestX see the [flask-restx documentation](https://flask-restx.readthedocs.io/en/latest/swagger.html).

The logger is a Flask RestX extension of Flask's logging module. Each namespace has its own logger attached. Loggers will log all errors on the server by default. The server is setup in a way to make logging in the implementation code and the namespace files possible. The log file is stored on the user's machine. Read about the logger here: [flask-restx documentation](https://flask-restx.readthedocs.io/en/latest/logging.html).

## Development Principles and Processes

First read up on REST guidelines if you are unfamiliar with them. A simple writeup of the guidelines can be found here: [REST guidelines](https://www.mulesoft.com/resources/api/what-is-rest-api-design).

For more concrete examples of the concepts check the stack overflow blog [here](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/).

### When adding a new feature

- Decide which namespace is appropriate for your feature and define a REST based endpoint. If none are appropriate create a new namespace.
- Define your endpoint(s) in the namespace following REST guidelines.
- Add the Swagger documentation to the endpoint(s). Be sure to define the response status codes, and if not too much trouble, the response object.
- Add the implementation code to the corresponding python package.
- Add logging to the endpoint implementation code and the endpoint definition code.
- Add the request to Postman
- Write Postman tests for your endpoint (s) and make sure they pass.

### When extending or adding to an existing feature

- Decide if the namespace the current code is in is most appropriate. If not you may want to create a new namespace or place it into a separate pre-existing namespace.
- Define your endpoint(s) in the namespace following REST guidelines.
- Add the Swagger documentation to the endpoint(s). Be sure to define the response status codes, and if not too much trouble, the response object.
- Add the implementation code to the corresponding python package.
- Add logging to the endpoint implementation code and the endpoint definition code.
- Add the request to Postman
- Write Postman tests for your endpoint (s)

::: tip
Currently most endpoints don't follow REST guidelines. This was a decision to make the conversion faster. When refactoring or adding a new endpoint one easy way to make the API more RESTful is to follow the resource hierarchy model used by Pennsieve's API endpoints. Of course this is only true when adding features that are essentially just calling Pennsieve's endpoints to do the work. New features that work on SODA for SPARC resources that are exclusive to SODA for SPARC may require their own resource hierarchy model that will not be based on Pennsieves.  
:::

### Error Handling

The server throws general exceptions when something unexpected happens. These should be returned to the client with a 500 status code. If something we expect to go wrong happens, the server should use an HTTPException object along with the appropriate status code. For instance, if the client provided invalid account credentials or a nonexistent dataset id/name return a 400 status code.

Currently when validating credentials we assume there is a user error rather than checking to see if Pennsieve is down. We also do not bother differentiating between a 401 or a 400 response from Pennsieve when authenticating credentials. This is because the details will be logged - so we will know exact causes during investigation - and the difference doesn't matter to the client code.

Here are the different ways to handle errors in the api files and the implementation code:

#### In the API files

Wrap a Try Except block around the call to the implementation function.

```python

    # inside of a route function in an api file
    try:
        return import_pennsieve_dataset(sodajsonobject)
    except Exception as e:
        if notBadRequestException(e):
            api.abort(500, str(e))
        raise e
```

Notice the use of notBadRequestException. This is a helper function that checks if the error is not the result of a bad request from the client. An example of a bad request would be if the client isn't a manager or owner of a dataset, but they tried to edit it anyways.

If the error is not the result of a bad request, then something unexpected happened and we return a 500 status code along with the error message to the client. Otherwise we return the bad request exception message to the user along with the status code attached to `e`.

While not precise - as we only return the 500 status code and ignore all other 500s - this is a good starting point for future work.

#### In the implementation code

For bad request exceptions use the abort function from flask.

```python
    import abort from flask

    try:
        ps = get_ps_account()
    except Exception as e:
        abort(400, "Error: Select a valid Pennsieve account. ")

```

This will raise an HTTPException with a 400 status code and the message from the exception. It will bubble up to the api file and be returned to the
client from there. Use this pattern for all bad request exceptions.

### Logging - How and What

#### Importing the logger into the namespace and implementation code

Logging in the endpoint definition code is as simple as using the api object's logger. Access this with api.logger.<log_level>(<log_message>)

Logging in the implementation code requires importing the get_namespace_logger function into the implementation code if it isn't already there. Use the NamespaceEnum to get the correct namespace logger.

#### What to log

In order to answer: Does the component consume and produce the expected data when servicing a request?

- Log the incoming request data - in the case of SODAJJSONobj this can sometimes be complicated as it is so large. So ensure it gets properly logged by checking logs.
- Log the outgoing response data
- Log the state of the data at time of error - mostly for more complicated functions where this information can be helpful in debugging.

In order to answer: Does the component perform the expected operations to service a request?

- Log the essential paths taken when processing the request. Important: to avoid logging at every branching path just log this for complicated functions with different key paths. For reference check out the the dataset upload endpoint in the curation namespace.

### Writing Postman Tests

First view the existing tests on Postman to get an idea of what is being tested and how.
This Youtube video may also be helpful in understanding Postman testing. Watch it [here](https://www.youtube.com/watch?v=oXW-C2bM0wE).
