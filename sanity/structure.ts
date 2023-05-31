// @ts-ignore
export const structure = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Home")
				.child(
					S.editor()
						.id("home")
						.schemaType("home")
						.documentId("home")
						.title("Home")
				),
			S.listItem()
				.title("Release")
				.schemaType("release")
				.child(S.documentTypeList("release").title("Releases")),
		]);
