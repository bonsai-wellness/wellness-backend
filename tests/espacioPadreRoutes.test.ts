import request from "supertest";
import app from "../src/app";

describe("Test the espacio routes", () => {
	test("It should return a 200 and an array of all espacios padre", async () => {
		const response = await request(app).get("/api/espacio-padre/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});
});
