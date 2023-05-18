const TestModel = require("../models/Test/testModel");

exports.createTest = async (test) => {
  try {
    const newTest = await TestModel.create({ ...test });

    if (newTest) {
      return newTest;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateTest = async (id='', test) => {
  try {
    const Test = await TestModel.findByIdAndUpdate(id, {...test});

    if (Test) {
      return Test;
    }
    return null;
  } catch (error) {
    throw error;
  }
};


