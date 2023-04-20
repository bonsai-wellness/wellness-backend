# wellness-backend
## REST API for live people count and booking system
### Using:
* Node.js
* Express.js
* Prisma
* MS SQL Server

## Setup
Requires `.env` file with following parameters:
| Parameter  | Description |
| ------------- | ------------- |
| PORT  | Port to run server on |
| DB_URL  | URL of MS SQL Server database |

### 1. `npm install`
### Requires MS SQL Server database:
### 2. `npx prisma migrate dev`
### 3. `npm run dev`

### Runs the API in development mode:
* Open `localhost<port>` to view it on your browser.

## Routes
| CRUD  | HTTP Verb | URL | Description |
| ------------- | ------------- | ----------- | -----------|
| READ  | GET | /api/espacios | Returns json with all spaces in DB |

## Database Diagram
![bonsai-db (1)](https://user-images.githubusercontent.com/69658875/232967100-f83660d5-8e8f-4fc9-be00-0c8538e598c5.png)



## Example with endpoint: `/api/espacios`
```json
[
  {
    "espacio_id": 1,
    "created_at": "2023-04-19T03:25:19.636Z",
    "updated_at": "2023-04-19T03:25:19.636Z",
    "name": "Cancha de Tenis 1",
    "code": "CT1",
    "capacity": 4,
    "time_max": 90,
    "details": "Cancha para jugar tenis singles o dobles",
    "open_at": "1970-01-01T06:00:00.000Z",
    "close_at": "1970-01-01T22:00:00.000Z",
    "imagen": "https://magazine.fortevillageresort.com/wp-content/uploads/2022/01/tennis.jpg",
    "is_active": "T",
    "espacio_padre_id": 2
  },
  {
    "espacio_id": 2,
    "created_at": "2023-04-19T03:25:19.670Z",
    "updated_at": "2023-04-19T03:25:19.670Z",
    "name": "Cancha de Tenis 2",
    "code": "CT2",
    "capacity": 4,
    "time_max": 90,
    "details": "Cancha para jugar tenis singles o dobles",
    "open_at": "1970-01-01T06:00:00.000Z",
    "close_at": "1970-01-01T22:00:00.000Z",
    "imagen": "https://magazine.fortevillageresort.com/wp-content/uploads/2022/01/tennis.jpg",
    "is_active": "T",
    "espacio_padre_id": 2
  },
]
```
