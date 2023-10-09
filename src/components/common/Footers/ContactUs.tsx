import React from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sujet, setSujet] = React.useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="col-6 offset-3 text-center">
      <h1>Contacter Nous</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="col-form-label" htmlFor="name">Nom:</label>
          <input className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="email">Email:</label>
          <input className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="name">Sujet:</label>
          <input className="form-control"
            type="text"
            id="Sujet"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="message">Message:</label>
          <textarea className="form-control"
            cols={70}
            rows={8}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">envoyer</button>
      </form>
    </div>
  );
};
export default ContactUs;
