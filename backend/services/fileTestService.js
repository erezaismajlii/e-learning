const FileTestModel = require("../models/Test/fileTestModel");

exports.createFileTest = async (body) => {
  try {
    const newFileTest = await FileTestModel.create({ ...body });

    if (newFileTest) {
      return newFileTest;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.getFileTestById = async (_id = "") => {
  try {
    const res = await FileTestModel.findById(_id);
    return res;
  } catch (error) {
    throw error;
  }
};

exports.getFileTestByTestId = async (testId = "") => {
  try {
    const res = await FileTestModel.find({ TestId: testId });
    return res;
  } catch (error) {
    throw error;
  }
};
