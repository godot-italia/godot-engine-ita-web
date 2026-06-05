// sort by date
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b.data.date && b.data.date).valueOf() -
      new Date(a.data.date && a.data.date).valueOf(),
  );
  return sortedArray;
};

// sort eventi by event date
export const sortByEventDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b.data.event_date || b.data.date).valueOf() -
      new Date(a.data.event_date || a.data.date).valueOf(),
  );
  return sortedArray;
};

// sort product by weight
export const sortByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { data: { weight: any } }) => item.data.weight,
  );
  const withoutWeight = array.filter(
    (item: { data: { weight: any } }) => !item.data.weight,
  );
  const sortedWeightedArray = withWeight.sort(
    (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
      a.data.weight - b.data.weight,
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};

// filter events by category
export const filterByCategory = (array: any[], category: string) => {
  return array.filter((item: any) => item.data.category === category);
};

// get category archive index doc (e.g., -index.mdx in serate folder)
export const getCategoryIndexDoc = (array: any[], category: string) => {
  return array.find(
    (item: any) => item.data.category === category && !item.id.startsWith("-")
  );
};

// extract clean event id (filename without category folder path)
export const getCleanEventId = (fullId: string): string => {
  return fullId.includes("/") ? fullId.split("/").pop() || fullId : fullId;
};

// extract category from event id
export const getCategoryFromId = (fullId: string): string => {
  return fullId.includes("/") ? fullId.split("/")[0] : "";
};
