import { createContext, useState } from "react";
import { AuthorsImg1, AuthorsImg2, AuthorsImg3, AuthorsImg4, AuthorsImg5, AuthorsImg6, ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5 } from "../assets/images";

export const Context = createContext();
export const GlobalContext = ({ children }) => {
  const authorsList = [
    {
      id: 1,
      img: AuthorsImg1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      profession: "Manager",
      position: "Organization",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 2,
      img: AuthorsImg2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      profession: "Programmer",
      position: "Developer",
      status: "Offline",
      employed: "14/01/21",
    },
    {
      id: 3,
      img: AuthorsImg3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      profession: "Executive",
      position: "Projects",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 4,
      img: AuthorsImg4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      profession: "Manager",
      position: "Organization",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 5,
      img: AuthorsImg5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      profession: "Programmer",
      position: "Developer",
      status: "Offline",
      employed: "14/01/21",
    },
    {
      id: 6,
      img: AuthorsImg6,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      profession: "Designer",
      position: "UI/UX Design",
      status: "Offline",
      employed: "14/01/21",
    },
  ]
  const projectsList = [
    {
      id: 1,
      img: ProjectImg1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      profession: "Manager",
      position: "Organization",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 2,
      img: ProjectImg2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      profession: "Programmer",
      position: "Developer",
      status: "Offline",
      employed: "14/01/21",
    },
    {
      id: 3,
      img: ProjectImg3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      profession: "Executive",
      position: "Projects",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 4,
      img: ProjectImg4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      profession: "Manager",
      position: "Organization",
      status: "Online",
      employed: "14/01/21",
    },
    {
      id: 5,
      img: ProjectImg5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      profession: "Programmer",
      position: "Developer",
      status: "Offline",
      employed: "14/01/21",
    },
  ]
  const [registerData, setRegisterData] = useState(null);
  const [authors, setAuthors] = useState(authorsList)
  const [projects, setProjects] = useState(projectsList)

  //delete btn
  function deleteBtn(id) {
    const deleted = [...authors];
    const index = deleted.findIndex(user => user.id === id);

    deleted.splice(index, 1);
    setAuthors(deleted);
    localStorage.setItem("authors", JSON.stringify(deleted));
  }



  // Add function
  function addAuthor(data) {
    const updated = [...authors, data];
    setAuthors(updated);
    localStorage.setItem("authors", JSON.stringify(updated));
  }




  return (
    <Context.Provider value={{ registerData, setRegisterData, authors, setAuthors, deleteBtn, addAuthor, projects, setProjects }}>
      {children}
    </Context.Provider>
  );
};
