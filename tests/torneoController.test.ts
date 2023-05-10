import app from "../src/app";
import request from "supertest";

describe("TorneoController", () => {
	describe("GET /api/torneo/", () => {
		it("should return an array of all torneos containing corresponding parameters", async () => {
			const response = await request(app).get("/api/torneo/").send();			

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("torneo_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");
			expect(response.body[0]).toHaveProperty("evento");
			expect(response.body[0]).toHaveProperty("description");
			expect(response.body[0]).toHaveProperty("url");
			expect(response.body[0]).toHaveProperty("date_start");
			expect(response.body[0]).toHaveProperty("date_end");
			expect(response.body[0]).toHaveProperty("location");
			expect(response.body[0]).toHaveProperty("imagen");
			expect(response.body[0]).toHaveProperty("is_active");
			expect(response.body[0]).toHaveProperty("deporte_id");
			expect(response.body[0]).toHaveProperty("deporte");
		});
	});
});
