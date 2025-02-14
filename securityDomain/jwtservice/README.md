# Users API

## Description
This is a REST API built using FastAPI and MySQL. It provides endpoints for managing users and beneficiaries.

## Installation

1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate  # On Windows
   ```

3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

## Running the API

Start the FastAPI server using Uvicorn:
```sh
uvicorn app:app --reload
```

## Dependencies
The API relies on the following dependencies (see `requirements.txt` for details):
- FastAPI
- SQLAlchemy
- PyMySQL
- Uvicorn
- Pydantic
- Other required libraries

## API Documentation
Once the server is running, visit:
- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Project Structure
```
/project-root
│── app.py               # Main application file
│── requirements.txt      # List of dependencies
│── routes/
│   ├── beneficiary.py    # Routes for managing beneficiaries
│── config/
│   ├── openapi.py        # OpenAPI metadata configuration
```

## License
This project is licensed under the MIT License.