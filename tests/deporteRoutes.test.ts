import request from "supertest";
import app from "../src/app";

describe("Test the deporte routes", () => {
	test("It should return a 200 and an array of deportes", async () => {
		const response = await request(app).get("/api/deporte/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});	
});
