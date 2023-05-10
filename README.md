# wellness-backend
## REST API for live people count and booking system
### Testing:
npm run test
https://github.com/bonsai-wellness/wellness-backend/assets/69658875/cd99ffd5-4b98-41f7-9f73-93524e3a5e31

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

## Database Diagram
![bonsai-db (1)](https://user-images.githubusercontent.com/69658875/232967100-f83660d5-8e8f-4fc9-be00-0c8538e598c5.png)

## Routes
| CRUD  | HTTP Verb | URL | Description |
| ------------- | ------------- | ----------- | -----------|
| READ  | GET | /api/espacio | Returns `JSON` with all **Espacio** rows |
| CREATE  | POST | /api/espacio | Creates **Espacio** row |
| READ  | GET | /api/espacio-padre | Returns `JSON` with all **EspacioPadre** rows |
| CREATE  | POST | /api/espacio-padre | Creates **EspacioPadre** row |
| READ  | GET | /api/espacio/espacio-padre/:id | Returns `JSON` with all **EspacioPadre** rows with given deporte_id |
| CREATE  | POST | /api/deporte | Creates **Deporte** row |
| READ  | GET | /api/deporte | Returns `JSON` with all **Deporte** rows |
| CREATE  | POST | /api/espacio-deporte | Creates **EspacioDeporte** row |
| READ  | GET | /api/espacio-deporte/:id | Returns `JSON` with all **Deporte** rows with given deporte_id |

## Reference

### Get list with all Espacio rows
#### Request
```http
GET /api/espacio
```
#### Response `application/json`
```JSON
[
    {
        "espacio_id": 44,
        "created_at": "2023-04-21T01:44:01.716Z",
        "updated_at": "2023-04-21T01:44:01.716Z",
        "name": "Cancha de Fubol 2",
        "code": "CF1",
        "capacity": 22,
        "time_max": 90,
        "details": "Cancha de Futbol 7",
        "open_at": "1970-01-01T12:00:00.000Z",
        "close_at": "1970-01-01T04:00:00.000Z",
        "imagen": "http://192.168.1.236:8000/public/uploads/imagen-1682041441705.png",
        "is_active": "T",
        "espacio_padre_id": 3
    }
]
```

### Create Espacio
#### Request
```http
POST /api/espacio
```
##### `multipart/form-data`
| Name | Value Type |
| ---- | ---------- |
| name | `string` | 
| code | `string` | 
| capacity | `int` |
| time_max | `int` |
| details | `string` |
| open_at | 'HH:mm:ss' as `string` |
| close_at | 'HH:mm:ss' as `string` |
| espacio_padre_id | `int` references EspacioPadre |
| is_active | 'T' || 'F' as `string` |
| imagen | .png `file` |
#### Response `application/json`
``` JSON
{
    "espacio_id": 46,
    "created_at": "2023-04-21T04:37:08.103Z",
    "updated_at": "2023-04-21T04:37:08.103Z",
    "name": "Cancha de Fubol 2",
    "code": "CF1",
    "capacity": 22,
    "time_max": 90,
    "details": "Cancha de Futbol 7",
    "open_at": "1970-01-01T12:00:00.000Z",
    "close_at": "1970-01-01T04:00:00.000Z",
    "imagen": "public/uploads/imagen-1682051828085.png",
    "is_active": "T",
    "espacio_padre_id": 3
}
```

