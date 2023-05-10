import app from "../src/app";
import request from "supertest";

describe("EspacioController", () => {
	describe("GET /api/espacio/", () => {
		it("should return an array of all espacios hijo containing corresponding parameters", async () => {
			const response = await request(app).get("/api/espacio-padre/").send();

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("espacio_padre_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");
			expect(response.body[0]).toHaveProperty("code");
			expect(response.body[0]).toHaveProperty("map_url");
			expect(response.body[0]).toHaveProperty("is_active");			
		});
	});
});
