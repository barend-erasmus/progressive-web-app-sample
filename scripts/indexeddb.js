objectStore.createIndex("last_name_index", "last_name", { unique: false });

const last_name_index = object.index("last_name_index");

const request = last_name_index.get("foo");

request.openCursor().onsuccess = () => {
  const cursor = event.target.result;

  if (cursor) {
    // TODO

    cursor.continue();
  }
};
