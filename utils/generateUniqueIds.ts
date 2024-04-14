import type { Travel } from "~/types/Travel";

export function generateUniqueIds(tmpArray: Ref<Travel[]>): number {
  let idCounter = 1;
  const existingIds: Set<number> = new Set(
    tmpArray.value.map((obj: Travel) => Number(obj.id)),
  );

  while (existingIds.has(idCounter)) {
    idCounter++;
  }

  return idCounter;
}
