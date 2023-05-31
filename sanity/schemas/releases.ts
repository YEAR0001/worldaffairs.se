// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "release",
	title: "Release",
	type: "document",
	fields: [
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
		},
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
			name: "coverArt",
			title: "Cover Art",
			type: "image",
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
