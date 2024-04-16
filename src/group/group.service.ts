import { T_Interface } from "../text/text.interface";
import Group from "./group.model";

export async function addTextToGroupService(
  textIds: string[],
  groupId: string
) {
  const group: any = await Group.findById(groupId); // todo fix any
  textIds.forEach((textIds) => {
    if (!group.tours.includes(textIds)) {
      group.tours.push(textIds);
    }
  });
  group.save();
  return group;
}

export async function createGroupsService(name: string, description: string) {
  const result = await new Group();
  result.name = name;
  result.description = description;

  result.save();

  return result;
}

export async function removeTextFromGroupService(
  textIds: string[],
  groupId: string
) {
  const group: any = await Group.findById(groupId); // todo fix any
  textIds.forEach((textIds) => {
    if (group.texts.includes(textIds)) {
      group.texts.pull(textIds);
    }
  });
  group.save();
  return group;
}

export async function getAllGroupsService(query: any) {
  const filter: any = {};

  if (query.query) {
    filter.$or = [
      {
        name: { $regex: new RegExp(query.query?.toLowerCase(), "i") },
      },
    ];
  }

  const page = query.page || 1;
  const limit = query.limit || 10;

  const pagination = {
    limit,
    skip: (page - 1) * limit,
  };

  const data = await Group.find(filter, undefined, pagination)
    .sort({ createdAt: -1 })
    .populate("texts");

  const count = await Group.countDocuments(filter);

  return { data, count };
}

export async function updateGroupsService(
  id: string,
  update: {
    name?: string;
    status?: string;
    description?: string;
  }
) {
  const result = await Group.findByIdAndUpdate(id, { ...update }).lean();
  return { result };
}

export async function removeGroupService(id: string) {
  const result = Group.findByIdAndDelete(id);
  return { result };
}
export async function getGroupsService(id: string) {
  const result = Group.findById(id);
  return { result };
}

export async function getTextsOfGroupsService(id: string, query: any) {
  const filter: any = {}; // todo fix any

  if (query.query) {
    filter.$or = [
      {
        name: { $regex: new RegExp(query.query?.toLowerCase(), "i") },
      },
    ];
  }
  const result = await Group.findById(id).populate({
    path: "texts",
  });

  const limit = query.limit || 10;
  const page = query.page || 1;
  const start = (page - 1) * limit;
  const end = page * limit;

  const count = result?.texts?.length;
  const data = (result?.texts as T_Interface[])
    ?.filter((item: T_Interface) =>
      query.query ? item?.title?.includes(query.query) : true
    )
    .slice(start, end);

  return { data, count, group: result };
}
