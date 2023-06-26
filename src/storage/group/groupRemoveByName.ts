import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupName: string) {
  try {
    const storedGroups = await groupsGetAll();

    const filteredGroups = storedGroups.filter((group) => group !== groupName);

    const storage = JSON.stringify(filteredGroups);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
