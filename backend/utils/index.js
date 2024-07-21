import mongoose, { model } from "mongoose";

const isValidObjectId = (id, res) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Object Id is not valid!'});
    }
}

const findDocumentById = async (model, id, res) => {
    try {
        const document = await model.findById(id);
        if (!document) {
         res.status(404).json({ error: `the ${model.modelName} does not exist!`});
         return null;
        }
        return document;
    } catch (error) {
        console.error( `Error while finding ${model.modelName} by Id`, error);
        return res.status(500).json(({ error: 'Internal Server Error!'}));
    }
};

export { isValidObjectId, findDocumentById };