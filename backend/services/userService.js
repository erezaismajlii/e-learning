const { cloudinary } = require('../configs/cloudinaryConfig');
const { convertPackInfoToQueryStr, convertTopicsToQueryStr } = require('../helpers/wordpackHelper');
const WordModel = require('../models/wordModel');

exports.uploadImage = async (imgSrc, folderName = '', config = {}) => {
  try {
    const result = await cloudinary.uploader.upload(imgSrc, {
      folder: folderName,
      ...config,
    });
    const { secure_url = null } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};


exports.uploadVideo = async (vidSrc, folderName ='', config = {}) => {
  try {
    const result = await cloudinary.uploader.upload(vidSrc, {
      folder: folderName,
      resource_type: "video",
      ...config,
    });
    const { secure_url = null } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};

exports.uploadAudio = async (audSrc, folderName ='', config = {}) => {
  try {
    const result = await cloudinary.uploader.upload(audSrc, {
      folder: folderName,
      resource_type: "video",
      ...config,
    });
    const { secure_url = null } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};
