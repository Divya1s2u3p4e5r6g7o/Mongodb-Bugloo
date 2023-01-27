exports.successResponse = (res, msg) => {
	var data = {
		status: 200,
		result: 'success',
		response: msg
	};
	return res.status(200).json(data);
};

exports.successResponseWithData = (res, msg, data) => {
	var resData = {
		status: 200,
		result: 'success',
		response: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.errorResponse = (res, msg) => {
	var data = {
		status: 500,
		result: 'error',
		response: msg,
	};
	return res.status(500).json(data);
};

exports.notFoundResponse = (res, msg) => {
	var data = {
		status: 404,
		result: 'not found',
		message: msg,
	};
	return res.status(200).json(data);
};

exports.ratingNotFoundResponse = (res, msg) => {
	var data = {
		status: 404,
		result: 'Not Available',
		message: msg,
	};
	return res.status(200).json(data);
};

exports.notFoundResponseWithOutData = (res, msg) => {
	var data = {
		status: 404,
		result: 'not found',
		message: msg,
	};
	return res.status(203).json(data);
};

exports.validationErrorWithData = (res, msg, data) => {
	var resData = {
		status: 400,
		result: 'validation error',
		response: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = (res, msg) => {
	var data = {
		status: 401,
		result: 'unauthorized',
		response: msg,
	};
	return res.status(203).json(data);
};

exports.invalidPermissions = (res, msg) => {
	var data = {
		status: 406,
		result: 'Invalid',
		response: msg,
	};
	return res.status(400).json(data);
};

exports.alreadyExist = (res, msg) => {
	var data = {
		status: 201,
		result: 'success',
		response: msg
	};
	return res.status(200).json(data);
};