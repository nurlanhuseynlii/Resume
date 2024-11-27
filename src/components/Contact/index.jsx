import React from "react";



const Contact = () => {
  const contacts = [
    {
      icon: "fa-brands fa-github",
      title: "Github",
      value: "@nurlanhuseynlii",
      link: "https://github.com/nurlanhuseynlii",
      target: "_blank",
    },

    {
      icon: "fa-brands fa-linkedin-in",
      title: "LinkedIn",
      value: "@nurlanhuseynlii",
      link: "https://www.linkedin.com/in/nurlan-huseynli-a70673242/",
      target: "_blank",
    },

    {
      icon: "fa-regular fa-envelope",
      title: "Email",
      value: "nurlannhuseynlii@gmail.com",
      link: "mailto:nurlannhuseynlii@gmail.com",
      target: "_blank",
    },

    {
      icon: "fa-solid fa-phone",
      title: "Mobile",
      value: "+994 55 452 32 32",
      link: "#",
      target: "_self",
    },

    {
      icon: "fa-regular fa-newspaper",
      title: "Medium",
      value: "@nurlanhuseynlii",
      link: "https://medium.com/@nurlannhuseynlii",
      target: "_blank",
    }
    
  ];

  return (
    <div className="skill-blok contact">
      <h3 className="contact_info">Contact Details</h3>
      <ul className="contacts">
        {contacts.map((info, index) => (
          <li key={index}>
            <a href={info.link}  target={info.target} rel="noopener noreferrer" >
              <div className="avatar">
                <div className="icons">
                <i className={info.icon}></i>
                </div>
              
              <div className="contact_details">
                <h4>{info.value}</h4>
                <span>{info.title}</span>
              </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
