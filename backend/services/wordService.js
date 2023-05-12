const WordModel = require("../models/wordModel");
const { convertPackInfoToQueryStr } = require("../helpers/wordpackHelper");

exports.createNewWord = async (wordInfo) => {
  try {
    const newWord = await WordModel.create({ ...wordInfo });

    if (newWord) {
      return newWord;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateWord = async (_id = "", wordInfo) => {
  try {
    const updateWord = await WordModel.findByIdAndUpdate(_id, wordInfo);

    if (updateWord) {
      return updateWord;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.getIdByWord = async (word = "") => {
  try {
    var query = new RegExp(`^${word}.*`, "gi");
    const id = await WordModel.findOne({ Word: query }).select("-_id");
    return id;
  } catch (error) {
    throw error;
  }
};

exports.searchWord = async (word = "", limit = 50, select = "") => {
  try {
    const regex = new RegExp(`^${word}.*`, "gi");
    const list = await WordModel.find({ word: regex })
      .limit(limit)
      .select(select);
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getAllWords = async () => {
  try {
    const list = await WordModel.find({}).select(
      "-_id Type Word Mean Phonetic Picture"
    );
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getWordDetail = async (id) => {
  try {
    const res = await WordModel.findById(id);

    return res;
  } catch (error) {
    throw error;
  }
};
