export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-14";

export const dataset = "production";

export const projectId = "b1xbsyjh";

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
