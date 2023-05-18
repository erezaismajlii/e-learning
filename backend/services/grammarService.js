const grammarModel = require("../models/Grammar/grammarModel");
const GrammarModel = require("../models/Grammar/grammarModel");

exports.createGrammar = async (grammarInfo) => {
  try {
    const newGrammar = await GrammarModel.create({ ...grammarInfo });

    if (newGrammar) {
      return newGrammar;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateGrammar = async (_id = "", grammarInfo) => {
  try {
    const grammar = await grammarModel.findByIdAndUpdate(_id, grammarInfo);
    if (grammar) {
      return grammar;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.getGrammarById = async (id = "") => {
  try {
    const res = await GrammarModel.findById(id);
    return res;
  } catch (error) {
    throw error;
  }
};
