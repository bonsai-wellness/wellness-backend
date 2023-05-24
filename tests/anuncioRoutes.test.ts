import request from "supertest";
import app from "../src/app";

describe("Test the anuncio routes", () => {
	test("It should return a 200 and an array of anuncios", async () => {
		const response = await request(app).get("/api/anuncio/");
		expect(response.statusCode).toBe(200);        
		expect(response.body).toBeInstanceOf(Array);
	});	
});
