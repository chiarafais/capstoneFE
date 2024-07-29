import Swal from "sweetalert2";

export const DO_LOGIN = "DO_LOGIN";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_BEACHES = "GET_ALL_BEACHES";
export const GET_USER_RESERVATION = "GET_USER_RESERVATION ";

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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Edit done!",
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
        title: "Edit profile failed!",
        showConfirmButton: false,
        timer: 1500,
      });
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

export const newUser = (user) => {
  return async () => {
    try {
      const response = await fetch(url + "auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration done!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Errore nella fetch login");
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("errror", err);
    }
  };
};

export const newReservation = (userId, beachId, date, peopleNum) => {
  return async () => {
    try {
      const response = await fetch(
        url + `reservation?userId=${userId}&beachId=${beachId}&date=${date}&peopleNum=${peopleNum}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("tkn"),
          },
        }
      );

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Reservation successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Errore nella fetch login");
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Reservation failed!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("errror", err);
    }
  };
};

export const getUserReservation = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "reservation/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_USER_RESERVATION, payload: data });
      } else {
        throw new Error("Errore nella chiamata delle prenotazioni utente");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const deleteReservation = (id_prenotazione) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "reservation/" + id_prenotazione, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        dispatch(getUserReservation());
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Reservation deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Errore nella cancellazione della prenotazioni utente");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};
