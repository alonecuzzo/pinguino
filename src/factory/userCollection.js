export const userCollection = {
  retrieve
};

function retrieve() {
  resolve({
    ok: true,
    json: () => users
  });
}
