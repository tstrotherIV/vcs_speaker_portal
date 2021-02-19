const remoteURL =
  // "http://127.0.0.1:5000";
  "https://ct99jczfti.execute-api.us-west-2.amazonaws.com/staging";

export default {
  async createUser(newData) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((postedData) => postedData.json());
  },
  
  async getUser(userId) {
    return fetch(`${remoteURL}/users/${userId}`).then((result) =>
      result.json()
    );
  },

  async getAllUsers() {
    return fetch(`${remoteURL}/users`).then((result) =>
      result.json()
    );
  },

  async updateUser(user_id, editedData) {
    return fetch(`${remoteURL}/users/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    }).then((updatedData) => updatedData.json());
  },

  async createNewAccount(newData) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  },

  async loginUser(login_data) {
    return fetch(`${remoteURL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_data),
    }).then((postedData) => postedData.json());
  },

  async logoutUser(session_id) {
    return fetch(`${remoteURL}/sessions/${session_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${session_id}`,
      },
    }).then((updatedData) => updatedData.json());
  },
};
