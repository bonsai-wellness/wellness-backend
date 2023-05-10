import request from "supertest";
import app from "../src/app";

describe("Test the torneo routes", () => {
	test("It should return a 200 and an array of torneos", async () => {
		const response = await request(app).get("/api/torneo/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});
});
