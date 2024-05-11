import { useState } from "react";

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
        try {
            const parsedUser = JSON.parse(stringifiedUser);
            return parsedUser.user;
        } catch (error) {
            console.error("Error parsing user data:", error);
            return null;
        }
    } else {
        return null;
    }
};

export const useUserData = () => {
    const [user, setUser] = useState(userData());

    const updateUserAndStore = (data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
    };

    return { user, updateUserAndStore };
};


// import { useState } from "react";

// export const userData = () => {
//     const stringifiedUser = localStorage.getItem("user") || '""';
//     return JSON.parse(stringifiedUser || {});
// };

// export const useUserData = () => {
//     const [user, setUser] = useState(userData());

//     const updateUserAndStore = (data) => {
//         setUser(data);
//         localStorage.setItem("user", JSON.stringify(data));
//     };

//     return { user, updateUserAndStore };
// };
