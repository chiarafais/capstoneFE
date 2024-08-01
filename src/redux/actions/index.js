import Swal from "sweetalert2";

export const DO_LOGIN = "DO_LOGIN";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_BEACHES = "GET_ALL_BEACHES";
export const GET_USER_RESERVATION = "GET_USER_RESERVATION ";
export const GET_ALL_USERS = "GET_ALL_USERS ";
export const GET_ALL_RESERVATION = "GET_ALL_RESERVATION ";
export const ADMIN_GET_ALL_BEACHES = "ADMIN_GET_ALL_BEACHES";

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
        if (data.role === "ADMIN") {
          window.location.pathname = "/admin";
        }
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
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d55a3c",
      cancelButtonColor: "#1c4175",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("tkn");
        dispatch({ type: DO_LOGIN, payload: "" });
        dispatch({ type: GET_USER_INFO, payload: "" });
        window.location.pathname = "/";
      }
    });
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

export const getBeachEstablishment = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/establishment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_BEACHES, payload: data });
      } else {
        throw new Error("Errore nella chiamata delle spiagge per stabilimento");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const getBeachAvailable = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/available", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_BEACHES, payload: data });
      } else {
        throw new Error("Errore nella chiamata delle spiagge per disponibili");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const getBeachByProvince = (provinceName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/province/" + provinceName, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_BEACHES, payload: data });
      } else {
        throw new Error("Errore nella chiamata delle spiagge per provincia");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_USERS, payload: data.content });
      } else {
        throw new Error("Errore nella chiamata delle lista utenti");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "users/" + userId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getAllUsers());
      } else {
        throw new Error("Errore nella chiamata nell'elimazione dell'utente");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const getAllReservation = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "reservation", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ALL_RESERVATION, payload: data.content });
      } else {
        throw new Error("Errore nella chiamata nella lista delle prenotazioni");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const adminDeleteReservation = (id_prenotazione) => {
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
        dispatch(getAllReservation());
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Reservation deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Errore nella cancellazione della prenotazioni");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const adminGetAllBeaches = () => {
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
        dispatch({ type: ADMIN_GET_ALL_BEACHES, payload: data.content });
      } else {
        throw new Error("Errore nella fetch beach admin");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const deleteBeach = (id_spiaggia) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/" + id_spiaggia, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Beach deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(adminGetAllBeaches());
      } else {
        throw new Error("Errore nella cancellazione della spiaggia");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};

export const saveBeach = (beach) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach", {
        method: "POST",
        body: JSON.stringify(beach),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Beach created successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(adminGetAllBeaches());
      } else {
        throw new Error("Errore nella post new beach");
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Beach creation failed!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("errror", err);
    }
  };
};

export const editBeach = (beach, idSpiaggia) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "beach/" + idSpiaggia, {
        method: "PUT",
        body: JSON.stringify(beach),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tkn"),
        },
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Beach edited successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(adminGetAllBeaches());
      } else {
        throw new Error("Errore nella post modifica beach");
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Beach edit failed!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("errror", err);
    }
  };
};
