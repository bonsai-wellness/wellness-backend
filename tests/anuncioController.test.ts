import app from "../src/app";
import request from "supertest";

describe("AnuncioController", () => {
	describe("GET /api/anuncio/", () => {
		it("should return an array of all anuncios containing corresponding parameters", async () => {
			const response = await request(app).get("/api/anuncio/").send();			

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("aviso_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");			
			expect(response.body[0]).toHaveProperty("description");
			expect(response.body[0]).toHaveProperty("url");
			expect(response.body[0]).toHaveProperty("imagen");			
		});
	});
});
