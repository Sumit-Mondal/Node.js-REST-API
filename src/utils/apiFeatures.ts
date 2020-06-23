class APIFeatures {
	constructor(public query: any, public queryString: any) {
		this.query = query;
		this.queryString = queryString;
	}

	filter() {
		const queryObj: { [key: string]: unknown } = { ...this.queryString };
		const excludedFields: string[] = ["page", "sort", "limit", "fields"];
		excludedFields.forEach((element: string) => delete queryObj[element]);

		// Advanced filtering
		let queryStr: string = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (param) => `$${param}`);

		this.query = this.query.find(JSON.parse(queryStr));
		return this;
	}

	sort() {
		if (this.queryString.sort) {
			const sortBy = this.queryString.sort.toString().split(",").join(" ");
			this.query = this.query.sort(sortBy);
		} else {
			this.query = this.query.sort("-createdAt");
		}

		return this;
	}

	limitFields() {
		if (this.queryString.fields) {
			const fields = this.queryString.fields.toString().split(",").join(" ");
			this.query = this.query.select(fields);
		} else {
			this.query = this.query.select("-__v");
		}

		return this;
	}

	paginate() {
		let page: number;
		let limit: number;

		if (this.queryString.page) {
			page = parseInt(this.queryString.page.toString());
		} else {
			page = 1;
		}

		if (this.queryString.limit) {
			limit = parseInt(this.queryString.limit.toString());
		} else {
			limit = 100;
		}

		const skip: number = (page - 1) * limit;
		this.query = this.query.skip(skip).limit(limit);

		return this;
	}
}

// Exporting APIFeatures
module.exports = APIFeatures;
