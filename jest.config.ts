export default {
	preset: "ts-jest",
	testEnvironment: "node",	
	roots: ["./tests"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	clearMocks: true,
	resetMocks: true,
	restoreMocks: true,
	setupFilesAfterEnv: ["./tests/setup.ts"],
	verbose: true,
	forceExit: true,
};
