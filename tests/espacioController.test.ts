import app from "../src/app";
import request from "supertest";

describe("EspacioController", () => {
	describe("GET /api/espacio/", () => {
		it("should return an array of all espacios hijo containing corresponding parameters", async () => {
			const response = await request(app).get("/api/espacio/").send();

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("espacio_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");
			expect(response.body[0]).toHaveProperty("code");
			expect(response.body[0]).toHaveProperty("capacity");
			expect(response.body[0]).toHaveProperty("time_max");
			expect(response.body[0]).toHaveProperty("details");
			expect(response.body[0]).toHaveProperty("open_at");
			expect(response.body[0]).toHaveProperty("close_at");
			expect(response.body[0]).toHaveProperty("imagen");
			expect(response.body[0]).toHaveProperty("is_active");
			expect(response.body[0]).toHaveProperty("espacio_padre_id");
		});
	});

	describe("GET /api/espacio/espacio-padre/:id", () => {
		it("should return an array of all espacios hijo of a espacio padre by espacio padre id and containing corresponding parameters", async () => {
			const espacioPadreId = 3;
			const response = await request(app)
				.get(`/api/espacio/espacio-padre/${espacioPadreId}`)
				.send();

			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body.length).toBeGreaterThan(0);
			expect(response.body[0]).toHaveProperty("espacio_id");
			expect(response.body[0]).toHaveProperty("created_at");
			expect(response.body[0]).toHaveProperty("updated_at");
			expect(response.body[0]).toHaveProperty("name");
			expect(response.body[0]).toHaveProperty("code");
			expect(response.body[0]).toHaveProperty("capacity");
			expect(response.body[0]).toHaveProperty("time_max");
			expect(response.body[0]).toHaveProperty("details");
			expect(response.body[0]).toHaveProperty("open_at");
			expect(response.body[0]).toHaveProperty("close_at");
			expect(response.body[0]).toHaveProperty("imagen");
			expect(response.body[0]).toHaveProperty("is_active");
			expect(response.body[0]).toHaveProperty("espacio_padre_id", espacioPadreId);
		});
	});
});
