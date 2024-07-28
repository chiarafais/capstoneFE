import Swal from "sweetalert2";

export const DO_LOGIN = "DO_LOGIN";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_BEACHES = "GET_ALL_BEACHES";

const url = "http://localhost:3001/";

export const doLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("tkn", data.tokenId);
        dispatch(getMyProfile());
        dispatch({ type: DO_LOGIN, payload: data.tokenId });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome back!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Errore nella fetch login");
      }
    } catch (err) {
      console.log("errror", err);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login failed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};

export const getAllBeaches = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/allbeach", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_BEACHES, payload: data.content });
      } else {
        throw new Error("Errore nella fetch beach");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_USER_INFO, payload: data });
      } else {
        throw new Error("Errore nella fetch login");
      }
    } catch (err) {
      localStorage.clear("tkn");
      console.log("errror", err);
    }
  };
};

export const getRefreshDay = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "reservation/prova", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjIwOTY1NTQsImV4cCI6MTcyMjcwMTM1NCwic3ViIjoiMSJ9.Jw1QhbPvcPHptsx6RMlpx4qdpFKarc1hnjtbv14uIQk",
        },
      });

      if (response.ok) {
        console.log("data aggiornata correttamente!");
      } else {
        throw new Error("Errore nella get per aggiornare la data");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const updateMyProfile = (profile) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "users/me", {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_USER_INFO, payload: data });
      } else {
        throw new Error("Errore nella fetch login");
      }
    } catch (err) {
      localStorage.clear("tkn");
      console.log("errror", err);
    }
  };
};

export const doLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("tkn");
    dispatch({ type: DO_LOGIN, payload: "" });
    dispatch({ type: GET_USER_INFO, payload: "" });
  };
};
