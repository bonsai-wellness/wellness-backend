import app from "../src/app";
import request from "supertest";

describe("TorneoController", () => {
	describe("GET /api/punto-importante/", () => {
		it("should return an array of all puntos importantes related containing corresponding parameters", async () => {
			const response = await request(app).get("/api/punto-importante/").send();			

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("punto_importante_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");			
		});
	});
});
