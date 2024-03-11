class BasicApi {
  #api = "http://localhost:3000";

  constructor() {
    console.log("constructor ran");
  }

  get = async (endpoint) => {
    try {
      const url = this.#api + endpoint;
      const res = await fetch(url);
      const resJson = await res.json();
      return resJson;
    } catch (e) {
      throw new Error(e);
    }
  };

  getWithBody = async (endpoint, str) => {
    try {
      const url = this.#api + endpoint;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: str }),
      });
      const resJson = await res.json();
      return resJson;
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default new BasicApi();
