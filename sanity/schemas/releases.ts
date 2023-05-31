// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "release",
	title: "Release",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "releaseDate",
			title: "Release Date",
			type: "date",
		},
		{
			name: "link",
			title: "Link",
			type: "url",
		},
	],
	orderings: [
		{
			title: "Release Date, New",
			name: "releaseDateDesc",
			by: [{ field: "releaseDate", direction: "desc" }],
		},
		{
			title: "Release Date, Old",
			name: "releaseDateAsc",
			by: [{ field: "releaseDate", direction: "asc" }],
		},
	],
};
