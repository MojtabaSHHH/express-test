import T_Model from "./text.model";

export const textCreatedService = async (body: any) => {
  if (!body) {
    return { message: "The Text was not created" };
  }
  const result = new T_Model({
    title: body?.title,
    description: body?.description,
    status: body?.status,
  });
  await result.save();

  return { result };
};

export const textUpdateService = async (id: string, body: any) => {
  try {
    const result = await T_Model.findByIdAndUpdate(id, body, {
      new: true,
    });
    return {
      success: true,
      message: "Text Updated successfully",
      data: { result },
    };
  } catch (error) {
    return {
      success: false,
      message: "Text not Updated",
      data: {},
    };
  }
};

export const textDeleteService = async (id: string) => {
  try {
    const result = await T_Model.findByIdAndDelete(id);
    return {
      success: true,
      message: "Text Deleted successfully",
      data: { result },
    };
  } catch (error) {
    return {
      success: false,
      message: "Text not Deleted",
      data: {},
    };
  }
};

export const textGetOneByIdService = async (id: string) => {
  try {
    const result = await T_Model.findById(id);
    return {
      success: true,
      message: "Text received successfully",
      data: { result },
    };
  } catch (error) {
    return {
      success: false,
      message: "The Text was not received",
      data: {},
    };
  }
};

export const textGetAllService = async () => {
  try {
    const result = await T_Model.find().sort({ createdAt: -1 });
    return {
      success: true,
      message: "Texts received successfully",
      data: { result },
    };
  } catch (error) {
    return {
      success: false,
      message: "The Texts was not received",
      data: {},
    };
  }
};
