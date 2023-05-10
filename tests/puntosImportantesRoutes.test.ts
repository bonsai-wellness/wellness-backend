import request from "supertest";
import app from "../src/app";

describe("Test the espacio puntos importantes routes", () => {
	test("It should return a 200 and an array of puntos importantes", async () => {
		const response = await request(app).get("/api/punto-importante/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});	
});
