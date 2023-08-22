---
lang: en-US
title: Error Handling
description: How to handle error handling
---

# Error Handling Overview

SODA for SPARC's backend has a central error handler that receives errors from module/utility code called from any API endpoint and sends back an appropriate response to the client.

Currently the error handler expects to receive generic Python exceptions of type Exception, the requests's library HTTPException, and the Werkzeug HTTPError.

How these types of errors are handled when throwing errors in the server code is detailed below.

::: tip
The error handling code can be found in the file errorHandler.py within the pyflask folder.
:::

# How the Error Handler Handles Requests Library Errors

First it should be noted that at the moment, SODA for SPARC only makes requests to Pennsieve APIs in the backend using the requests library. Therefore all errors from the requests library are from Pennsieve at the time these docs have been written.

::: tip
This can be updated in the error handling code by checking the response URL attached to the message and seeing if the basename matches the Pennsieve URL. When adding newer services simply check for their URLs as well.
:::

## How to raise requests errors to the error handler

From within any API endpoint code simply use the requests library 'raise_for_status()' method. There is no need to catch this or re-raise it unless you need to do some processing / procedure at the time of an error's occurrence before re-raising. For example, in the upload function main_curate_function we catch any errors that are raised so that we can change the curation status before the error is then re-raised to the central error handler.

In some instances you may want to build out a longer error message. For example, if you are scanning for invalid files in a user's dataset. In these instances catch the errors to prevent them from raising and build out the message.

## Handling Pennsieve errors

Any Pennsieve error may be a 5xx error. If doing any of the above processing be sure to make sure the error was nit a 5xx. If it is reraise the error without modifying it so it can be processed by the error handler in the most appropriate manner.

::: tip
There are functions for checking if the pennsieve response is a 5xx or some other 4xx. These can be found in the pennsieveUnexpectedError.py file.
There is also functions for checking if the pennsieve servce is down. In these cases raise the error to the central error handler.
:::

# Handling werkzeug errors

Create werkzeug errors using abort whenever sending a custom error. The error handler will send these up to the user as is.

# Handling python exceptions

Any python exception raised to the error handler is essentially an unexpected error. This will be handled by sending back a 500 the the client.
