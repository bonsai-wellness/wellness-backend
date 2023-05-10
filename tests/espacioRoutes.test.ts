import request from "supertest";
import app from "../src/app";

describe("Test the espacio routes", () => {
	test("It should return a 200 and an array of all espacios hijo", async () => {
		const response = await request(app).get("/api/espacio/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});

	test("It should return a 200 and an array of all espacios hijos that belong to a espacio padre by id", async () => {
		const espacioPadreId = 3;
		const response = await request(app).get("/api/espacio/espacio-padre/3");
		expect(response.statusCode).toBe(200);		
		expect(response.body[0]).toHaveProperty("espacio_padre_id", espacioPadreId);
	});
});
