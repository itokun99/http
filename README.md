
# @itokun99/http

A utility for making API requests easily and efficiently.

## Installation

To install this package, run the following command:

```bash
npm install @itokun99/http
```

## Usage

Here's how to use this package in your project.

### Import Module

```javascript
const http = require("@itokun99/http");
```

### GET Request

```javascript
http
  .get("https://api.example.com/data")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### POST Request

```javascript
const data = { key: "value" };

http
  .post("https://api.example.com/data", data)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### PUT Request

```javascript
const updatedData = { key: "newValue" };

http
  .put("https://api.example.com/data/1", updatedData)
  .then((response) => {
    console.log("Updated Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### DELETE Request

```javascript
http
  .delete("https://api.example.com/data/1")
  .then((response) => {
    console.log("Delete Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## API

### Methods

#### `get(url, [options])`

Performs an HTTP GET request to the specified URL.

**Parameters:**

- `url` (string): The URL endpoint to request.
- `options` (object, optional): Additional configuration for the request.

**Returns:**

- Promise: Resolves with the response data or rejects with an error.

#### `post(url, data, [options])`

Performs an HTTP POST request to the specified URL with the provided data.

**Parameters:**

- `url` (string): The URL endpoint to request.
- `data` (object): The data to send in the request body.
- `options` (object, optional): Additional configuration for the request.

**Returns:**

- Promise: Resolves with the response data or rejects with an error.

#### `put(url, data, [options])`

Performs an HTTP PUT request to the specified URL with the provided data.

**Parameters:**

- `url` (string): The URL endpoint to request.
- `data` (object): The data to send in the request body.
- `options` (object, optional): Additional configuration for the request.

**Returns:**

- Promise: Resolves with the response data or rejects with an error.

#### `delete(url, [options])`

Performs an HTTP DELETE request to the specified URL.

**Parameters:**

- `url` (string): The URL endpoint to request.
- `options` (object, optional): Additional configuration for the request.

**Returns:**

- Promise: Resolves with the response data or rejects with an error.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new feature branch (`git checkout -b new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin new-feature`).
5. Create a Pull Request.

## License

This package is licensed under the [MIT License](LICENSE).

---

For more information, visit the [GitHub repository](https://github.com/itokun99/http).

```

Feel free to let me know if there are any other adjustments you would like to make!
```
