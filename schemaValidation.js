const schemaData = {
    id: {
        isNumeric: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
    first_name: {
        isString: true,
        notEmpty: true,
        trim: true,
    },
    last_name: {
        isString: true,
        notEmpty: true,
        trim: true,
    },
    email: {
        isEmail: true,
        notEmpty: true,
        trim: true,
    },
    gender: {
        isString: true,
        notEmpty: true,
        trim: true,
    },
};

const schemaUpdateData = {
    id: {
        isNumeric: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
    first_name: {
        isString: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
    last_name: {
        isString: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
    email: {
        isEmail: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
    gender: {
        isString: true,
        notEmpty: true,
        trim: true,
        optional: true,
    },
};

module.exports = {
    schemaData,
    schemaUpdateData,
};
