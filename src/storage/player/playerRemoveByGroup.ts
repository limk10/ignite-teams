import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playerGetByGroup";

export async function playerRemoveByGroup(player: string, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const filteredPlayer = storedPlayers.filter(({ name }) => name !== player);
    const players = JSON.stringify(filteredPlayer);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
